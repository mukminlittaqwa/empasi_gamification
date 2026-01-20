// "use client";

// import { useState, useEffect } from "react";
// import Card from "@/components/Card";
// import { XpHeader } from "@/components/XpHeader";
// import { SingleSelectQuestion } from "@/components/quiz/SingleSelectQuestion";
// import { MultiSelectMarket } from "@/components/quiz/MultiSelectMarket";
// import { SubQuestions } from "@/components/quiz/SubQuestions";
// import { Portions, PortionSlider } from "@/components/quiz/PortionSlider";
// import { quizQuestions } from "@/data/quizData";

// export default function Quiz() {
//   const xp = 100;
//   const baseProgress = 0;

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const currentQuestion = quizQuestions[currentQuestionIndex];
//   const [points, setPoints] = useState(0);
//   const [level, setLevel] = useState(1);

//   const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
//     null,
//   );
//   const [selectedMarketIndices, setSelectedMarketIndices] = useState<number[]>(
//     [],
//   );
//   const [subIndex, setSubIndex] = useState(0);
//   const [subFeedback, setSubFeedback] = useState<string | null>(null);

//   const [portions, setPortions] = useState<Portions>({
//     karbo: 35,
//     prohe: 25,
//     pronab: 12,
//     lemak: 18,
//     sayurBuah: 20,
//   });

//   const totalQuestions = quizQuestions.length;
//   const subCount = currentQuestion.subQuestions?.length || 0;

//   const progress =
//     ((currentQuestionIndex + (subIndex + 1) / (subCount || 1)) /
//       totalQuestions) *
//     100;

//   useEffect(() => {
//     const completedQuestions =
//       currentQuestionIndex +
//       (currentQuestion.type === "sub-questions" ? subIndex / subCount : 0);
//     setLevel(Math.floor(completedQuestions / 2) + 1);
//   }, [currentQuestionIndex, subIndex, currentQuestion.type, subCount]);

//   const handleNext = () => {
//     let addedPoints = 0;

//     if (currentQuestion.type === "single-select" && currentQuestion.options) {
//       const selected = currentQuestion.options[selectedOptionIndex!];
//       if (selected?.isCorrect) addedPoints += 150;
//     }

//     if (
//       currentQuestion.type === "multi-select-market" &&
//       currentQuestion.marketItems
//     ) {
//       selectedMarketIndices.forEach((idx) => {
//         if (currentQuestion.marketItems![idx].isHealthy) {
//           addedPoints += 40;
//         } else {
//           addedPoints -= 30;
//         }
//       });
//       if (selectedMarketIndices.length === currentQuestion.maxSelections)
//         addedPoints += 50;
//     }

//     if (currentQuestion.type === "sub-questions") {
//       if (
//         currentQuestion.subQuestions?.[subIndex].options[selectedOptionIndex!]
//           ?.isCorrect
//       ) {
//         addedPoints += 70;
//       } else {
//         addedPoints -= 20;
//       }
//     }

//     // Portion-slider (5)
//     if (currentQuestion.type === "portion-slider") {
//       const ideal = currentQuestion.idealPortions;
//       if (ideal) {
//         if (totalPortion !== 100) {
//           addedPoints += 0;
//         } else {
//           const inRange =
//             portions.karbo >= ideal.karbo.min &&
//             portions.karbo <= ideal.karbo.max &&
//             portions.prohe >= ideal.prohe.min &&
//             portions.prohe <= ideal.prohe.max &&
//             portions.pronab >= ideal.pronab.min &&
//             portions.pronab <= ideal.pronab.max &&
//             portions.lemak >= ideal.lemak.min &&
//             portions.lemak <= ideal.lemak.max &&
//             portions.sayurBuah >= ideal.sayurBuah.min &&
//             portions.sayurBuah <= ideal.sayurBuah.max;
//           addedPoints += inRange ? 150 : 60;
//         }
//       }
//     }

//     // Bonus akhir kalau semua soal selesai dengan baik (opsional)
//     // if (currentQuestionIndex === quizQuestions.length - 1) {
//     //   if (points + addedPoints >= 900) addedPoints += 100; // bonus kalau hampir maks
//     // }

//     setPoints((prev) => Math.max(0, prev + addedPoints));

//     if (currentQuestion.type === "sub-questions") {
//       if (subIndex < (currentQuestion.subQuestions?.length || 0) - 1) {
//         setSubIndex(subIndex + 1);
//         setSelectedOptionIndex(null);
//         setSubFeedback(null);
//       } else {
//         if (currentQuestionIndex < quizQuestions.length - 1) {
//           setCurrentQuestionIndex(currentQuestionIndex + 1);
//         } else {
//           localStorage.setItem("quizPoints", (points + addedPoints).toString());
//           window.location.href = "/quiz/result";
//         }
//         setSubIndex(0);
//       }
//     } else if (currentQuestion.type === "portion-slider") {
//       setPortions({
//         karbo: 30,
//         prohe: 20,
//         pronab: 10,
//         lemak: 15,
//         sayurBuah: 25,
//       });
//       if (currentQuestionIndex < quizQuestions.length - 1) {
//         setCurrentQuestionIndex(currentQuestionIndex + 1);
//       } else {
//         localStorage.setItem("quizPoints", (points + addedPoints).toString());
//         window.location.href = "/quiz/result";
//       }
//     } else {
//       if (currentQuestionIndex < quizQuestions.length - 1) {
//         setCurrentQuestionIndex(currentQuestionIndex + 1);
//       } else {
//         localStorage.setItem("quizPoints", (points + addedPoints).toString());
//         window.location.href = "/quiz/result";
//       }
//     }
//     setSelectedOptionIndex(null);
//     setSelectedMarketIndices([]);
//     setSubFeedback(null);
//   };

//   const totalPortion = Object.values(portions).reduce((a, b) => a + b, 0);
//   const isTotal100 = totalPortion === 100;

//   const getStatus = () => {
//     if (!isTotal100)
//       return { text: "Total harus 100%", color: "text-red-500", hint: "" };
//     const ideal = currentQuestion.idealPortions;
//     if (!ideal) return { text: "Seimbang!", color: "text-green-600", hint: "" };

//     const issues: string[] = [];
//     if (portions.karbo < ideal.karbo.min || portions.karbo > ideal.karbo.max)
//       issues.push("karbohidrat");
//     if (portions.prohe < ideal.prohe.min || portions.prohe > ideal.prohe.max)
//       issues.push("protein hewani");
//     if (
//       portions.pronab < ideal.pronab.min ||
//       portions.pronab > ideal.pronab.max
//     )
//       issues.push("protein nabati");
//     if (portions.lemak < ideal.lemak.min || portions.lemak > ideal.lemak.max)
//       issues.push("lemak");
//     if (
//       portions.sayurBuah < ideal.sayurBuah.min ||
//       portions.sayurBuah > ideal.sayurBuah.max
//     )
//       issues.push("sayur & buah");

//     if (issues.length === 0)
//       return {
//         text: "Seimbang!",
//         color: "text-green-600",
//         hint: "Bagus sekali, Bunda!",
//       };
//     return {
//       text: "Belum Seimbang",
//       color: "text-red-500",
//       hint: `kurang ${issues.join(", ")}`,
//     };
//   };

//   const status = getStatus();

//   const canProceed =
//     currentQuestion.type === "single-select"
//       ? selectedOptionIndex !== null
//       : currentQuestion.type === "multi-select-market"
//         ? selectedMarketIndices.length === (currentQuestion.maxSelections || 5)
//         : currentQuestion.type === "sub-questions"
//           ? // ? selectedOptionIndex !== null &&
//             //   currentQuestion.subQuestions?.[subIndex].options[selectedOptionIndex]
//             //     .isCorrect
//             selectedOptionIndex !== null
//           : currentQuestion.type === "portion-slider"
//             ? isTotal100 && status.text === "Seimbang!"
//             : true;

//   return (
//     <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-orange-100">
//       <main className="flex p-4 w-full max-w-md md:max-w-lg text-black flex-col gap-6">
//         <Card className="border-0 border-none!">
//           <XpHeader
//             points={points}
//             level={level}
//             progressPercentage={progress}
//           />
//         </Card>

//         <Card>
//           <div className="flex flex-col items-center gap-6">
//             <h1 className="text-2xl md:text-4xl font-medium text-center tracking-tight mb-2">
//               {currentQuestion.id}. {currentQuestion.title}
//             </h1>

//             <p className="text-center text-black text-sm max-w-prose mb-6">
//               {currentQuestion.description}
//             </p>

//             {currentQuestion.type === "single-select" &&
//               currentQuestion.options && (
//                 <SingleSelectQuestion
//                   question={currentQuestion}
//                   selectedIndex={selectedOptionIndex}
//                   onSelect={setSelectedOptionIndex}
//                 />
//               )}

//             {currentQuestion.type === "multi-select-market" &&
//               currentQuestion.marketItems && (
//                 <MultiSelectMarket
//                   question={currentQuestion}
//                   selectedIndices={selectedMarketIndices}
//                   onToggle={(idx) => {
//                     if (selectedMarketIndices.includes(idx)) {
//                       setSelectedMarketIndices(
//                         selectedMarketIndices.filter((i) => i !== idx),
//                       );
//                     } else if (
//                       selectedMarketIndices.length <
//                       (currentQuestion.maxSelections || 5)
//                     ) {
//                       setSelectedMarketIndices([...selectedMarketIndices, idx]);
//                     }
//                   }}
//                 />
//               )}

//             {currentQuestion.type === "sub-questions" &&
//               currentQuestion.subQuestions && (
//                 <SubQuestions
//                   question={currentQuestion}
//                   subIndex={subIndex}
//                   selectedIndex={selectedOptionIndex}
//                   feedback={null}
//                   // onSelect={handleSubSelect}
//                   onSelect={(idx) => setSelectedOptionIndex(idx)}
//                 />
//               )}

//             {currentQuestion.type === "portion-slider" && (
//               <PortionSlider
//                 portions={portions}
//                 setPortions={setPortions}
//                 status={status}
//                 totalPortion={totalPortion}
//               />
//             )}

//             {canProceed && (
//               <button
//                 onClick={handleNext}
//                 className="mt-8 w-full max-w-xs bg-orange-600 hover:bg-orange-700 text-white text-xl font-bold py-5 rounded-2xl shadow-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-400"
//               >
//                 {currentQuestion.type === "portion-slider"
//                   ? "Simpan & Lanjut"
//                   : currentQuestion.type === "sub-questions" &&
//                       subIndex < (currentQuestion.subQuestions?.length || 0) - 1
//                     ? "Selanjutnya"
//                     : currentQuestion.buttonText}
//               </button>
//             )}
//           </div>
//         </Card>
//       </main>
//     </div>
//   );
// }

"use client";

import { useState, useEffect, SetStateAction } from "react";
import Card from "@/components/Card";
import { XpHeader } from "@/components/XpHeader";
import { SingleSelectQuestion } from "@/components/quiz/SingleSelectQuestion";
import { MultiSelectMarket } from "@/components/quiz/MultiSelectMarket";
import { SubQuestions } from "@/components/quiz/SubQuestions";
import { Portions, PortionSlider } from "@/components/quiz/PortionSlider";
import { quizQuestions } from "@/data/quizData";

export default function Quiz() {
  const baseProgress = 0;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quizQuestions[currentQuestionIndex];

  const [points, setPoints] = useState(0);
  const [level, setLevel] = useState(1);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [lastAddedPoints, setLastAddedPoints] = useState(0);

  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null,
  );
  const [selectedMarketIndices, setSelectedMarketIndices] = useState<number[]>(
    [],
  );
  const [subIndex, setSubIndex] = useState(0);

  const [portions, setPortions] = useState<Portions>({
    karbo: 35,
    prohe: 25,
    pronab: 12,
    lemak: 18,
    sayurBuah: 20,
  });

  const totalQuestions = quizQuestions.length;
  const subCount = currentQuestion.subQuestions?.length || 0;

  const progress =
    ((currentQuestionIndex + (subIndex + 1) / (subCount || 1)) /
      totalQuestions) *
    100;

  // Level berdasarkan poin (lebih bermakna)
  useEffect(() => {
    if (points < 200) setLevel(1);
    else if (points < 500) setLevel(2);
    else if (points < 800) setLevel(3);
    else setLevel(4);
  }, [points]);

  const handleNext = () => {
    let addedPoints = 0;
    let message: string | null = null;

    if (currentQuestion.type === "single-select" && currentQuestion.options) {
      const selected = currentQuestion.options[selectedOptionIndex!];
      if (selected?.isCorrect) {
        addedPoints += 150;
        message = "Benar sekali, Bunda! +150 poin 🎉";
      } else {
        message = "Kurang tepat, tapi lanjut yuk 😊";
      }
    }

    if (
      currentQuestion.type === "multi-select-market" &&
      currentQuestion.marketItems
    ) {
      let healthyCount = 0;
      selectedMarketIndices.forEach((idx) => {
        if (currentQuestion.marketItems![idx].isHealthy) {
          healthyCount++;
          addedPoints += 40;
        } else {
          addedPoints -= 30;
        }
      });
      if (selectedMarketIndices.length === currentQuestion.maxSelections) {
        addedPoints += 50;
      }
      if (
        healthyCount ===
        currentQuestion.marketItems.filter((i) => i.isHealthy).length
      ) {
        message = "Sempurna! Semua sehat +50 bonus";
      } else {
        message = "Ada jebakan ya... hati-hati lain kali";
      }
    }

    // Sub-questions
    if (currentQuestion.type === "sub-questions") {
      if (
        currentQuestion.subQuestions?.[subIndex].options[selectedOptionIndex!]
          ?.isCorrect
      ) {
        addedPoints += 70;
        message = "Bagus sekali! +70 poin";
      } else {
        addedPoints -= 20;
        message = "Kurang tepat, -20 poin. Coba lagi di soal berikutnya!";
      }
    }

    if (currentQuestion.type === "portion-slider") {
      const ideal = currentQuestion.idealPortions;
      if (ideal) {
        if (totalPortion !== 100) {
          addedPoints -= 20;
          message = "Total harus 100%! -20 poin";
        } else {
          const isPerfect =
            portions.karbo >= ideal.karbo.min &&
            portions.karbo <= ideal.karbo.max &&
            portions.prohe >= ideal.prohe.min &&
            portions.prohe <= ideal.prohe.max &&
            portions.pronab >= ideal.pronab.min &&
            portions.pronab <= ideal.pronab.max &&
            portions.lemak >= ideal.lemak.min &&
            portions.lemak <= ideal.lemak.max &&
            portions.sayurBuah >= ideal.sayurBuah.min &&
            portions.sayurBuah <= ideal.sayurBuah.max;

          addedPoints += isPerfect ? 150 : 30;

          message = isPerfect
            ? "Sempurna! +150 poin 🎉"
            : "Hampir seimbang +30 poin";
        }
      }
    }

    // Bonus akhir (opsional)
    if (
      currentQuestionIndex === quizQuestions.length - 1 &&
      points + addedPoints >= 900
    ) {
      addedPoints += 100;
      message = (message || "") + " +100 bonus akhir! Kamu luar biasa!";
    }

    setPoints((prev) => Math.max(0, prev + addedPoints));
    setLastAddedPoints(addedPoints);
    setModalMessage(message);
    setShowFeedbackModal(true);
  };

  const confirmNext = () => {
    setShowFeedbackModal(false);
    setModalMessage(null);

    if (currentQuestion.type === "sub-questions") {
      if (subIndex < (currentQuestion.subQuestions?.length || 0) - 1) {
        setSubIndex(subIndex + 1);
        setSelectedOptionIndex(null);
      } else {
        if (currentQuestionIndex < quizQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          localStorage.setItem("quizPoints", points.toString());
          window.location.href = "/quiz/result";
        }
        setSubIndex(0);
      }
    } else if (currentQuestion.type === "portion-slider") {
      setPortions({
        karbo: 35,
        prohe: 25,
        pronab: 12,
        lemak: 18,
        sayurBuah: 20,
      });
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        localStorage.setItem("quizPoints", points.toString());
        window.location.href = "/quiz/result";
      }
    } else {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        localStorage.setItem("quizPoints", points.toString());
        window.location.href = "/quiz/result";
      }
    }

    setSelectedOptionIndex(null);
    setSelectedMarketIndices([]);
  };

  const totalPortion = Object.values(portions).reduce((a, b) => a + b, 0);
  const isTotal100 = totalPortion === 100;

  const getStatus = () => {
    if (!isTotal100)
      return { text: "Total harus 100%", color: "text-red-500", hint: "" };
    const ideal = currentQuestion.idealPortions;
    if (!ideal) return { text: "Seimbang!", color: "text-green-600", hint: "" };

    const issues: string[] = [];
    if (portions.karbo < ideal.karbo.min || portions.karbo > ideal.karbo.max)
      issues.push("karbohidrat");
    if (portions.prohe < ideal.prohe.min || portions.prohe > ideal.prohe.max)
      issues.push("protein hewani");
    if (
      portions.pronab < ideal.pronab.min ||
      portions.pronab > ideal.pronab.max
    )
      issues.push("protein nabati");
    if (portions.lemak < ideal.lemak.min || portions.lemak > ideal.lemak.max)
      issues.push("lemak");
    if (
      portions.sayurBuah < ideal.sayurBuah.min ||
      portions.sayurBuah > ideal.sayurBuah.max
    )
      issues.push("sayur & buah");

    if (issues.length === 0)
      return {
        text: "Seimbang!",
        color: "text-green-600",
        hint: "Bagus sekali, Bunda!",
      };
    return {
      text: "Belum Seimbang",
      color: "text-red-500",
      hint: `kurang ${issues.join(", ")}`,
    };
  };

  const status = getStatus();

  const canProceed =
    currentQuestion.type === "single-select"
      ? selectedOptionIndex !== null
      : currentQuestion.type === "multi-select-market"
        ? selectedMarketIndices.length === (currentQuestion.maxSelections || 5)
        : currentQuestion.type === "sub-questions"
          ? selectedOptionIndex !== null
          : currentQuestion.type === "portion-slider"
            ? isTotal100 && status.text === "Seimbang!"
            : true;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-orange-100">
      <main className="flex p-4 w-full max-w-md md:max-w-lg text-black flex-col gap-6">
        <Card className="border-0 border-none!">
          <XpHeader
            points={points}
            level={level}
            progressPercentage={progress}
          />
        </Card>

        <Card>
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-2xl md:text-4xl font-medium text-center tracking-tight mb-2">
              {currentQuestion.id}. {currentQuestion.title}
            </h1>

            <p className="text-center text-black text-sm max-w-prose mb-6">
              {currentQuestion.description}
            </p>

            {currentQuestion.type === "single-select" &&
              currentQuestion.options && (
                <SingleSelectQuestion
                  question={currentQuestion}
                  selectedIndex={selectedOptionIndex}
                  onSelect={setSelectedOptionIndex}
                />
              )}

            {currentQuestion.type === "multi-select-market" &&
              currentQuestion.marketItems && (
                <MultiSelectMarket
                  question={currentQuestion}
                  selectedIndices={selectedMarketIndices}
                  onToggle={(idx) => {
                    if (selectedMarketIndices.includes(idx)) {
                      setSelectedMarketIndices(
                        selectedMarketIndices.filter((i) => i !== idx),
                      );
                    } else if (
                      selectedMarketIndices.length <
                      (currentQuestion.maxSelections || 5)
                    ) {
                      setSelectedMarketIndices([...selectedMarketIndices, idx]);
                    }
                  }}
                />
              )}

            {currentQuestion.type === "sub-questions" &&
              currentQuestion.subQuestions && (
                <SubQuestions
                  question={currentQuestion}
                  subIndex={subIndex}
                  selectedIndex={selectedOptionIndex}
                  feedback={null}
                  onSelect={(idx) => setSelectedOptionIndex(idx)}
                />
              )}

            {currentQuestion.type === "portion-slider" && (
              <PortionSlider
                portions={portions}
                setPortions={setPortions}
                status={status}
                totalPortion={totalPortion}
              />
            )}

            {canProceed && (
              <button
                onClick={handleNext}
                className="mt-8 w-full max-w-xs bg-orange-600 hover:bg-orange-700 text-white text-xl font-bold py-5 rounded-2xl shadow-lg transform transition-all hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-400"
              >
                {currentQuestion.type === "portion-slider"
                  ? "Simpan & Selesai!"
                  : currentQuestion.type === "sub-questions" &&
                      subIndex < (currentQuestion.subQuestions?.length || 0) - 1
                    ? "Selanjutnya"
                    : currentQuestion.buttonText}
              </button>
            )}
          </div>
        </Card>

        {/* Modal Feedback */}
        {showFeedbackModal && (
          <div
            className="fixed inset-0  bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-9999 transition-opacity duration-300"
            onClick={() => setShowFeedbackModal(false)}
          >
            <div
              className="bg-white rounded-3xl p-10 max-w-lg w-full mx-4 shadow-2xl border border-gray-200 opacity-100" // paksa opacity 100
              onClick={(e) => e.stopPropagation()}
            >
              {/* <button
                onClick={() => setShowFeedbackModal(false)}
                className="absolute top-4 right-6 text-3xl text-gray-500 hover:text-gray-800 font-bold"
              >
                ×
              </button> */}

              <h2 className="text-3xl font-extrabold text-center mb-6 text-gray-800">
                {lastAddedPoints > 0
                  ? "Bagus sekali, Bunda! 🎉"
                  : lastAddedPoints < 0
                    ? "Ayo coba lagi ya!"
                    : "Kurang tepat nih 😊"}
              </h2>

              <p
                className={`text-center text-xl mb-8 font-semibold ${
                  lastAddedPoints > 0
                    ? "text-green-600"
                    : lastAddedPoints < 0
                      ? "text-red-600"
                      : "text-orange-600"
                }`}
              >
                {modalMessage || "Mari lanjut ke soal berikutnya!"}
              </p>

              <button
                onClick={confirmNext}
                className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-xl font-bold py-5 rounded-2xl shadow-xl transition-all hover:scale-105"
              >
                Lanjut ke Soal Berikutnya
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

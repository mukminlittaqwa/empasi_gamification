"use client";

import { useState } from "react";
import Card from "@/components/Card";
import { XpHeader } from "@/components/XpHeader";
import { SingleSelectQuestion } from "@/components/quiz/SingleSelectQuestion";
import { MultiSelectMarket } from "@/components/quiz/MultiSelectMarket";
import { SubQuestions } from "@/components/quiz/SubQuestions";
import { Portions, PortionSlider } from "@/components/quiz/PortionSlider";
import { quizQuestions } from "@/data/quizData";

export default function Quiz() {
  const xp = 100;
  const level = 1;
  const baseProgress = 0;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const currentQuestion = quizQuestions[currentQuestionIndex];

  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(
    null
  );
  const [selectedMarketIndices, setSelectedMarketIndices] = useState<number[]>(
    []
  );
  const [subIndex, setSubIndex] = useState(0);
  const [subFeedback, setSubFeedback] = useState<string | null>(null);

  const [portions, setPortions] = useState<Portions>({
    karbo: 10,
    prohe: 20,
    pronab: 10,
    lemak: 15,
    sayurBuah: 25,
  });

  const totalQuestions = quizQuestions.length;
  const subCount = currentQuestion.subQuestions?.length || 0;

  const progress =
    baseProgress +
    ((currentQuestionIndex + (subIndex + 1) / (subCount || 1)) /
      totalQuestions) *
      (100 - baseProgress);

  const handleNext = () => {
    if (currentQuestion.type === "sub-questions") {
      if (subIndex < (currentQuestion.subQuestions?.length || 0) - 1) {
        setSubIndex(subIndex + 1);
        setSelectedOptionIndex(null);
        setSubFeedback(null);
      } else {
        if (currentQuestionIndex < quizQuestions.length - 1) {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
          alert("Quiz selesai! Skor akhir: ...");
        }
        setSubIndex(0);
      }
    } else if (currentQuestion.type === "portion-slider") {
      setPortions({
        karbo: 30,
        prohe: 20,
        pronab: 10,
        lemak: 15,
        sayurBuah: 25,
      });
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert("Quiz selesai! Skor akhir: ...");
      }
    } else {
      if (currentQuestionIndex < quizQuestions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        alert("Quiz selesai! Skor akhir: ...");
      }
    }
    setSelectedOptionIndex(null);
    setSelectedMarketIndices([]);
    setSubFeedback(null);
  };

  const handleSubSelect = (idx: number) => {
    setSelectedOptionIndex(idx);
    const currentSub = currentQuestion.subQuestions?.[subIndex];
    if (currentSub?.options[idx].isCorrect) {
      setSubFeedback("Benar sekali, Bunda! 👍");
    } else {
      setSubFeedback("Kurang tepat, coba lagi ya Bunda 😊");
    }
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
      ? selectedOptionIndex !== null &&
        currentQuestion.subQuestions?.[subIndex].options[selectedOptionIndex]
          .isCorrect
      : currentQuestion.type === "portion-slider"
      ? isTotal100 && status.text === "Seimbang!"
      : true;

  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans bg-orange-100">
      <main className="flex p-4 w-full max-w-md md:max-w-lg text-black flex-col gap-6">
        <Card className="border-0 border-none!">
          <XpHeader xp={xp} level={level} progressPercentage={progress} />
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
                        selectedMarketIndices.filter((i) => i !== idx)
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
                  feedback={subFeedback}
                  onSelect={handleSubSelect}
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
                  ? "Simpan & Lanjut"
                  : currentQuestion.type === "sub-questions" &&
                    subIndex < (currentQuestion.subQuestions?.length || 0) - 1
                  ? "Selanjutnya"
                  : currentQuestion.buttonText}
              </button>
            )}
          </div>
        </Card>
      </main>
    </div>
  );
}

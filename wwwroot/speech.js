window.speechHelper = {
    speakText: function (text, lang, rate, volume, dotNetObj) {
        let synth = window.speechSynthesis;
        let sentences = text.split('.').map(s => s.trim()).filter(s => s.length > 0);
        let currentIndex = 0;
        let isPaused = false;
        let utterance = null;
        const paragraph = document.getElementById('currentSentence');
        const inputText = document.getElementById('currentSentenceInput');

        function speakNextSentence() {
            if (isPaused || currentIndex >= sentences.length) return;

            let sentence = sentences[currentIndex];
            if (sentence.length < 25) {
                currentIndex++;
                speakNextSentence();
                return;
            }

            utterance = new SpeechSynthesisUtterance(sentence);
            utterance.rate = rate;
            utterance.volume = volume;
            utterance.lang = lang;
            paragraph.value = sentence + '.';
            inputText.value = sentence + '.';
            // 🔥 Check if `dotNetObj` is valid before calling Blazor method
            if (dotNetObj && typeof dotNetObj.invokeMethodAsync === "function") {                
                dotNetObj.invokeMethodAsync('UpdateSentence', sentence);
            } else {
                console.error("dotNetObj is undefined or invalid.");
            }

            synth.speak(utterance);

            utterance.onend = () => {
                if (!isPaused) {
                    currentIndex++;
                    speakNextSentence();
                }
            };
        }

        speakNextSentence();
    },

    pauseSpeech: function () {
        window.speechSynthesis.pause();
    },

    resumeSpeech: function () {
        window.speechSynthesis.resume();
    }
};

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpeechRecognitionApp.Models.GenerativeAI
{
    public class GeneratedText
    {
        public int Id { get; set; }
        public string? Text { get; set; }
        public string? EsTranslation { get; set; }
    }
}
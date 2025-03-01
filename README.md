# SpeechRecognitionApp

## Description
SpeechRecognitionApp is a Blazor-based web application designed for:
- **Speech recognition**
- **Text processing**
- **Entity extraction**
- **Sentiment analysis**
- **YouTube video search integration**

It leverages various APIs to provide features like **text-to-speech**, **Wikipedia searches**, and **natural language processing (NLP)** capabilities. The app is built with a modular structure, utilizing **Razor components** for a dynamic and interactive user interface.

---

## Features

### **1. Entity Search (`entity-search.razor`)**
**Purpose:** Search and analyze entities within text files and fetch related Wikipedia data.

#### **Capabilities:**
- Select entity types (e.g., **person, company, country**) from a dropdown.
- Input text files and search strings to match contexts.
- Display results in categorized tables (**Persons, Companies, Countries**).
- Perform Wikipedia searches and display summaries with options to **add or speak** the results.

**API Integration:** Connects to a local server (`http://localhost:5082`) for **recursive searches** and **text-to-speech** functionality.

---

### **2. Video Detail (`video-detail.razor`)**
**Purpose:** Display detailed information about YouTube videos and generate text features.

#### **Capabilities:**
- Embed YouTube videos using their **Video ID**.
- Show video metadata (**title, description, channel, publish date**).
- Generate **text sentiments** and **entities** from user input.
- Search for **LLM-generated text** based on prompts.

**API Integration:** Fetches video details and generates text features via `http://localhost:5082`.

---

### **3. YouTube Search (`youtube-search.razor`)**
**Purpose:** Search for saved YouTube videos.

#### **Capabilities:**
- Input a **search string** to retrieve video results.
- Display results in a table with **video ID, title, thumbnail, description, and more**.

**API Integration:** Queries saved YouTube videos from `http://localhost:5082/api/YouTubeApiSearch`.

---

### **4. Text Reader (`text-reader.razor`)**
**Purpose:** Process and analyze text with **speech synthesis** and **NLP features**.

#### **Capabilities:**
- Fetch text by **ID** or **search term**.
- Upload text files and control **speech synthesis** (voice, volume, rate).
- Generate **translations, sentiments, entities, and question-answering** responses.
- Display **multilingual text** (English/Spanish) with **entities and sentiment analysis**.

**API Integration:** Uses `http://localhost:5082` for **text generation, speech, and file handling**.

---

## Prerequisites

- **.NET Core SDK** (compatible with Blazor, e.g., 6.0 or later)
- **Visual Studio** (or another IDE supporting Blazor development)
- **Local API Server**: Running backend API at `http://localhost:5082`
- **JavaScript Runtime**: Required for **speech synthesis** (`IJSRuntime` injection)

---

## Installation

### **1. Clone the Repository**
```bash
git clone https://github.com/<your-username>/SpeechRecognitionApp.git
cd SpeechRecognitionApp
```

### **2. Restore Dependencies**
```bash
dotnet restore
```

### **3. Set Up the Backend API**
- Ensure the backend server is running at `http://localhost:5082`.
- Configure API endpoints for **YouTube, text generation, and NLP services** as required.

### **4. Run the Application**
```bash
dotnet run
```
Open your browser and navigate to `https://localhost:5001` (or the port specified in your configuration).

---

## Usage

### **Entity Search**
- Navigate to `/entity-search`.
- Select an **entity type** (e.g., "person") and provide a **text file path**.
- Enter **search strings** and click **"Match Context"** to see results.
- Use **"Wiki Search"** to fetch Wikipedia data based on an entity string.

### **Video Detail**
- Navigate to `/video-detail`.
- Enter a **YouTube Video ID** and click **"Display"** to load video details.
- Input text, role, and response to generate **sentiments and entities**.
- Search **LLM text generations** with a search string.

### **YouTube Search**
- Navigate to `/youtube-search`.
- Enter a **search term** and click **"Search"** to view saved YouTube videos.
- Review results in the table format.

### **Text Reader**
- Navigate to `/text-reader`.
- Use **"Get by Id"** or **"Search"** to fetch text data.
- Upload a text file and adjust **speech settings** (voice, volume, rate).
- Click **"Speak"** to hear the text or generate **translations and sentiments**.

---

## API Endpoints Used

| Feature               | Endpoint |
|----------------------|---------------------------|
| Text Generation      | `http://localhost:5082/api/TextGeneration` |
| Text-to-Speech       | `http://localhost:5082/api/TextToSpeechApi` |
| Recursive Search     | `http://localhost:5082/api/RecursiveSearch` |
| YouTube API          | `http://localhost:5082/api/YouTubeApiSearch` |
| NLP Services         | `http://127.0.0.1:5005/nlp` |

---

## Contributing

1. **Fork** the repository.
2. **Create a feature branch**:  
   ```bash
   git checkout -b feature/your-feature
   ```
3. **Commit your changes**:  
   ```bash
   git commit -m "Add your feature"
   ```
4. **Push to the branch**:  
   ```bash
   git push origin feature/your-feature
   ```
5. **Open a pull request**.

---

## Acknowledgments

- Built with **Blazor**.

# 🧠 NeuroShelf

**NeuroShelf** is your smart personal book library assistant — designed to help you effortlessly manage your personal book collection using the power of AI and image recognition. Just snap a picture of any book cover, and NeuroShelf automatically detects the book’s title and author, saving it to your virtual shelf. This intelligent system ensures you never purchase the same book twice.

---

## 🚀 Features

- 📸 **AI-powered Book Scanning**  
  Scan the cover of any book — printed or handwritten — and let the app detect the title and author using OCR (Optical Character Recognition) and AI analysis.

- 🧠 **Smart Identification**  
  NeuroShelf uses advanced logic (or LLMs like GPT) to intelligently determine the correct title and author, even from complex or multilingual covers (including Urdu).

- 📚 **Personal Digital Library**  
  All scanned books are saved to your private shelf — a digital catalog you can access and manage anytime.

- 🔍 **Duplicate Check**  
  Going book shopping? Open the camera and scan a book — NeuroShelf checks whether you already own it and alerts you if it’s a duplicate.

- ☁️ **Cloud Sync** *(optional)*  
  Sync your book data to a backend (e.g., Supabase or Firebase) so it stays safe and available across devices.

- 🌐 **Multilingual OCR Support**  
  Detect and extract text from English, Urdu, and more — supporting diverse personal libraries.

---

## 📱 Built With

| Technology     | Purpose                                   |
|----------------|--------------------------------------------|
| React Native + Expo | Cross-platform mobile development       |
| Expo Camera    | For taking book cover images               |
| Google Cloud Vision API / Tesseract | For OCR text extraction     |
| Google Gemini API | To identify title & author intelligently |
| Supabase / Firebase | For user authentication & data storage |
| Async Storage  | Local data caching                        |

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/NeuroShelf.git
cd NeuroShelf
npm install
npx expo start

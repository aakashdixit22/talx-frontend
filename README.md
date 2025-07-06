# 🌟 Talx - The AI-Powered Job Portal 🚀  
🌐 [Visit Talx](https://talx.vercel.app)  

**Talx** is an innovative web application designed to streamline job searching, posting, and career guidance. It serves as a powerful platform for job posters, applicants, and individuals seeking career insights. With a modern, responsive design and AI-driven functionalities, Talx offers an enhanced user experience tailored for today's job market.  

---

## ✨ Features  

### 🌐 Core Features  
1. **Job Posting and Management**  
   - Post jobs with necessary details.  
   - View all posted jobs in the "My Jobs" section.  
   - Edit or delete job postings.  
   - Export applicant details in Excel format.  

2. **Job Application**  
   - Explore jobs on the "Explore Jobs" page.  
   - Apply for jobs by submitting details and uploading resumes.  
   - View all applications in a dedicated section.  

3. **Applicant Management**  
   - Job posters can view applicants for posted jobs.  
   - Download applicants' resumes and cover letters.  

### 🌟 Innovative Features  
1. **BulletinBuzz 📰**  
   - Stay updated with the latest news in technology, sports, business, and more.  

2. **Chat Assistant AI 🤖**  
   - Provides instant assistance with navigating the Talx website.  
   - Offers career guidance and answers tech-related queries.  

3. **ResumeAI 📄**  
   - Upload resumes for AI-powered analysis and recommendations.  
   - Match resumes to job descriptions and get insights on suitability and improvement.  

### 💻 UI Highlights  
- Modern, responsive, and device-friendly design.  
- Engaging animations powered by **Framer Motion**.  

---

## 📸 Screenshots  

### 🌐 Homepage & Explore Jobs  
![Homepage and Explore Jobs](https://github.com/aakashdixit22/talx-frontend/blob/main/public/demo/IMG_1.png?raw=true)  
*Showcasing the modern, responsive homepage and the Explore Jobs page where users can browse job listings.*  

### ✏️ Post Job & My Jobs with Edit Modal  
![Post Job and My Jobs with Edit Modal](https://github.com/aakashdixit22/talx-frontend/blob/main/public/demo/IMG_2.png?raw=true)  
*The Post Job page for job posters and the My Jobs page with the edit modal functionality.*  

### 📰 BulletinBuzz & 🤖 Chat Assistant  
![BulletinBuzz and Chat Assistant](https://github.com/aakashdixit22/talx-frontend/blob/main/public/demo/IMG_3.png?raw=true)  
*The BulletinBuzz section for the latest news and the Chat Assistant AI for guidance and support.*  

### 📄 ResumeAI in Action  
![ResumeAI Working](https://github.com/aakashdixit22/talx-frontend/blob/main/public/demo/ResumeAI_GIF.gif?raw=true)  
*Demonstrating the AI-powered resume analyzer providing insights and recommendations.*  


---

## 🛠️ Tech Stack  

### 🎨 Frontend  
- **Framework**: React (JavaScript) with Vite.  
- **Styling**: Tailwind CSS.  
- **Additional Tools**: React Markdown, Framer Motion, XLSX for sheet conversion, Blob for resume/cover letter downloads.  
- **Deployment**: Hosted on **Vercel**, optimized for Vite + React templates.  

### 🖥️ Backend  
- **Framework**: Node.js with Express.  
- **Database**: MongoDB with Mongoose.  
- **Key Tools**:  
  - Bcrypt for authentication.  
  - JSON Web Token (JWT) for secure middleware.  
  - Multer for file uploads.  
  - NodeMailer for email services.  
  - Node-Cron for server uptime.  
  - News API for live updates.  

### 🧠 AI Backend  
- **Framework**: Flask (Python).  
- **AI Models**:  
  - **Chat Assistant AI**: Llama 3.3 (Meta) via Groq Cloud for chat functionalities.  
  - **ResumeAI**: Gemini 2.0  Flash for resume parsing and analysis.  
- **Features**:  
  - Fast, streaming API responses for seamless interactions.  

---

## 🚀 Installation  

### 🔧 Prerequisites  
- Node.js  
- MongoDB  
- Python  

### 📥 Step-by-Step Guide  

#### Frontend  
1. Clone the repository:  
   ```bash  
   git clone https://github.com/aakashdixit22/talx-frontend.git  
   cd talx-frontend  
   ```  
2. Install dependencies:  
   ```bash  
   npm install  
   ```  
3. Configure `.env` file in the root directory:  
   ```env  
   VITE_AUTH_MESSAGE=  
   VITE_AUTH_SECRET=  
   VITE_TALX_API=  
   VITE_BACKEND_URL= 
   ```  
4. Start the development server:  
   ```bash  
   npm run dev  
   ```  
   The frontend runs on `http://localhost:5173`.  

#### Backend  
1. Follow the instructions in the backend repository:  
   [Talx Backend Repository](https://github.com/aakashdixit22/talx-backend)  

#### AI Backend  
1. Follow the instructions in the AI backend repository:  
   [Talx AI Backend Repository](https://github.com/aakashdixit22/talx-api)  

---


## 📜 License  

This project is licensed under the [MIT License](https://github.com/aakashdixit22/talx-frontend/blob/main/LICENSE).  

---

## 📤 Contact Us

For issues or queries, feel free to open an issue on the respective repository or use contact us section on our website.  

---  

## 📂 Repositories  

- **Frontend**: [Talx Frontend](https://github.com/aakashdixit22/talx-frontend)  
- **Backend**: [Talx Backend](https://github.com/aakashdixit22/talx-backend)  
- **AI Backend**: [Talx AI Backend](https://github.com/aakashdixit22/talx-api)  

---  

Empowering careers with **Talx** - Your AI-powered job portal. 🌟

# Email Form with Nodemailer

This project demonstrates how to create a responsive email submission form using **React** on the frontend and **Node.js (Express.js)** with **Nodemailer** on the backend. The form captures user input and sends it as an email to a predefined recipient.

---

## **Features**

- Fully responsive UI using **React-Bootstrap** and **Tailwind CSS**.
- Backend powered by **Node.js** and **Express.js**.
- Email sending via **Nodemailer** and SMTP.
- Form validation and error handling.
- Seamless deployment on hosting platforms like **Vercel** (frontend) and **Render** or **Heroku** (backend).

---

## **Technologies Used**

### **Frontend**

- React
- React-Bootstrap
- Tailwind CSS
- Axios

### **Backend**

- Node.js
- Express.js
- Nodemailer

### **Hosting**

- Frontend: Vercel
- Backend: Render/Heroku

---

## **Setup Instructions**

### **1. Clone the Repository**

```bash
git clone https://github.com/praveen00219/EmailVerifyApp
cd email-form-nodemailer
```

### **2. Install Dependencies**

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd backend
npm install
```

### **3. Configure Environment Variables**

#### Backend

Create a `.env` file in the `backend` folder with the following content:

```env
EMAIL=your-email@example.com
PASSWORD=your-email-password
```

> **Note:** Use application-specific passwords or transactional email services in production.

---

## **Run the Project Locally**

### **1. Start the Backend**

```bash
cd backend
node server.js
```

### **2. Start the Frontend**

```bash
cd frontend
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## **Deployment Instructions**

### **Frontend**

1. Build the React app:
   ```bash
   npm run build
   ```
2. Deploy the `build` folder to platforms like **Vercel** or **Netlify**.

### **Backend**

1. Deploy the backend to platforms like **Render** or **Heroku**.
2. Set the environment variables (`EMAIL`, `PASSWORD`) in the hosting platform's settings.

### **Update Frontend API Endpoint**

Replace `http://localhost:3000` with your backend's hosted URL in `Form.js`:

```javascript
const response = await axios.post(
  "https://emailverifyapp-backend.onrender.com/",
  formData
);
```

---

## **Testing in Production**

1. Ensure the form submits data correctly.
2. Verify email delivery to the specified recipient.
3. Test responsiveness across all devices.

---

## **Screenshots**

Include screenshots of the responsive UI and working email submission for better clarity.

---

## **Contributing**

Feel free to fork this repository and submit pull requests for improvements or bug fixes.

---

## **License**

This project is licensed under the MIT License. See the LICENSE file for details.

# 📚 **IBO Web Application**

IBO is a modern healthcare web application built with **Next.js 15** using the **App Router** feature. The platform delivers seamless healthcare services, including doctor profiles, patient experiences, FAQs, and contact forms. It ensures responsive designs, dynamic content rendering, and robust backend integration.

---

## 🚀 **Tech Stack**

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Context API
- **Forms:** React Hook Form
- **Icons:** react-icons
- **Maps:** Google Maps Integration
- **Internationalization:** i18n
- **Environment Management:** dotenv

---

## 🗂️ **Project Structure**

```plaintext
ibo-web/
├── public/            # Static assets (favicon, images, etc.)
├── src/
│   ├── app/
│   │   ├── [locale]/  # Internationalization
│   │   ├── about-us/  # About Us page
│   │   ├── components/
│   │   │   ├── text-input/
│   │   │   ├── CustomSelect.tsx
│   │   │   ├── DynamicTabs.tsx
│   │   │   ├── Facility.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MapSection.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── Reviews.tsx
│   │   │   ├── Select.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Slider.tsx
│   │   │   ├── TextInput.tsx
│   │   │   ├── WellnessCorner.tsx
│   │   ├── contact/
│   │   ├── doctors/
│   │   ├── faq/
│   │   ├── healthcare-packages/
│   │   ├── insurance/
│   │   ├── patient-experience/
│   │   ├── specialities/
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── not-found.tsx
│   │   ├── page.tsx
│   │   ├── i18n/
│   │   ├── middleware.ts
│   ├── eslint.config.mjs
│   ├── next-env.d.ts
│   ├── next.config.ts
│   ├── package-lock.json
│   ├── .gitignore
```

---

## 📄 **Pages**

| **Path**              | **Description**          |
|------------------------|--------------------------|
| `/`                   | Home Page               |
| `/doctors`            | Doctors Listing         |
| `/patient-experience` | Patient Experience Page |
| `/about-us`           | About Us Page           |
| `/contact`            | Contact Form Page       |
| `/specialities`       | Specialties Section     |
| `/faq`                | Frequently Asked Questions |
| `/healthcare-packages`| Healthcare Packages     |
| `/insurance`          | Insurance Services      |

---

## 🧩 **Key Components**

- **TextInput:** Custom input component integrated with `react-hook-form`.
- **MapSection:** Displays Google Maps with a dynamic location.
- **Navbar:** Responsive navigation bar.
- **Footer:** Page footer with quick links.
- **DynamicTabs:** Tabbed content for sections.
- **Reviews:** User feedback and testimonials.
- **CustomSelect:** Custom dropdown selector for enhanced UI.
- **WellnessCorner:** Section for health and wellness tips.

---

## 🌍 **Internationalization (i18n)**

- Supports multi-language functionality.
- Locale folders for translations.

---

## 🛠️ **Setup and Installation**

### **1. Clone the repository:**
```bash
git clone https://github.com/Daldart/Ibo.git
cd Ibo
```

### **2. Install dependencies:**
```bash
npm install
```

### **3. Environment Variables:**
Create a `.env` file in the root directory with the following variables:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key
```

### **4. Run the development server:**
```bash
npm run dev
```

### **5. Open in browser:**
- Go to [http://localhost:3000](http://localhost:3000)

---

## ✅ **Best Practices**

- Follow the **component-based architecture**.
- Use **React Hook Form** for forms.
- Maintain consistent coding standards with **ESLint** and **Prettier**.
- Keep **environment variables** secure.
- Regularly run:
```bash
npm audit
```

---

## 🛡️ **Security Guidelines**

- Keep secrets (`.env`) out of source control.
- Update dependencies regularly.
- Run security audits before production deployments.

---

## 🛠️ **Troubleshooting**

### **Common Issues & Solutions**

#### **1. Dependency Issues**
- Run:
  ```bash
  npm install
  ```
- If problems persist:
  ```bash
  rm -rf node_modules
  npm install
  ```

#### **2. Environment Variables Not Loading**
- Verify your `.env` file is correctly set up.
- Restart the server after changes:
  ```bash
  npm run dev
  ```

#### **3. Google Maps Not Displaying**
- Check your API key in `.env`.
- Ensure billing is enabled for your Google Maps API project.

#### **4. Styling Not Applied Correctly**
- Restart the Next.js server:
  ```bash
  npm run dev
  ```
- Clear browser cache and reload.

#### **5. Build Fails**
- Check the build logs for specific errors:
  ```bash
  npm run build
  ```

---

## 🤝 **Contributing**

### **Steps to contribute:**

1. Fork the repository.
2. Create a new branch:
```bash
git checkout -b feature/your-feature-name
```
3. Make your changes.
4. Commit the changes:
```bash
git commit -m "Add new feature"
```
5. Push to your branch:
```bash
git push origin feature/your-feature-name
```
6. Open a Pull Request.

---

## 📜 **License**

This project is licensed under the **MIT License**.

---

## 🌟 **Acknowledgments**

Special thanks to:
- **Next.js** Team for the robust framework.
- **React Hook Form** for efficient form management.
- **Tailwind CSS** for the beautiful and responsive UI.

---


## 🗓️ **Roadmap**

- Integration of user authentication.
- Enhanced analytics dashboard.
- Real-time chat functionality.

---


``
## 🗂️ **Populating Data in Sanity Studio**

### **First, Make sure all dependencies are installed:**
```bash
npm install
```

### **1. Access Sanity Studio**

#### Option 1: Run Sanity Studio Locally
1. Navigate to the `sanity` directory in the project.
2. Start the local Sanity Studio:
   ```bash
   npx sanity dev
   ```
3. Open the Studio in your browser at [http://localhost:3333](http://localhost:3333).

---

### **2. Log In**

1. Log in to the Sanity Studio using your credentials:
   - Google
   - GitHub
   - Email/Password
2. If you don’t have an account, request an invitation from the project admin.

---

### **3. Add or Edit Content**

1. Navigate to the desired content type (e.g., `Service`, `Doctor`, or `Healthcare Package`).
2. Click **"Create New"** to add a new entry or select an existing entry to edit.
3. Fill in the fields:
   - Text fields: Enter descriptive and concise content.
   - Image fields: Upload high-quality images.
   - Reference fields: Link related documents using the dropdown.
4. When finished, click **Publish** to save your changes.

---

### **4. Collaborate with Others**

To add collaborators:
1. Go to [Sanity.io Dashboard](https://sanity.io/manage).
2. Select your project.
3. Under **Project Settings > Members**, invite collaborators by email.
4. Assign roles (e.g., Editor, Contributor).

---

### **5. Best Practices for Using Sanity Studio**

- Use meaningful names and descriptions for entries.
- Keep images optimized for web use (e.g., JPEG/PNG, under 1MB).
- Avoid making unnecessary changes to published content to maintain consistency.
- Regularly organize and clean up unused documents or drafts.
``` 

**Thank you for exploring the IBO Web Application! 🚀**

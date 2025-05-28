
# أذكاري – ورد المسلم اليومي | Adhkari - Daily Muslim Supplications

## 📖 وصف المشروع | Project Description

**أذكاري** هو موقع ويب بسيط يعرض أذكار المسلم اليومية مثل أذكار الصباح والمساء والنوم وأذكار أخرى. يتيح الموقع للمستخدمين قراءة الأذكار وتتبع تقدمهم باستخدام زر "تمت القراءة". يتم حفظ التقدم باستخدام `localStorage` في المتصفح.

**Adhkari** is a simple web application that displays daily Muslim supplications, such as morning, evening, and bedtime supplications, along with other categories. The site allows users to read the supplications and track their progress using a "Read" button. Progress is saved using the browser's `localStorage`.

---

## 📂 هيكل المشروع | Project Structure

```
/d:/سراج/موقع ويب
├── index.html       # الصفحة الرئيسية للموقع
├── styles.css       # ملف التنسيقات (CSS)
├── adhkar.js        # ملف الجافا سكريبت (JavaScript) الخاص بالوظائف
├── adhkar.json      # ملف يحتوي على بيانات الأذكار
├── logo.png         # شعار الموقع
└── README.md        # ملف التوثيق
```

---

## 🛠️ كيفية العمل | How It Works

### 1. **الصفحة الرئيسية (index.html)**
- تحتوي على الهيكل الأساسي للموقع.
- تعرض الأذكار في بطاقات (Cards) مع أزرار لتتبع التقدم.
- تحتوي على أزرار تصفية لتحديد فئة الأذكار (مثل الصباح، المساء، النوم).

### 2. **ملف التنسيقات (styles.css)**
- يحتوي على التنسيقات المخصصة لتحسين عرض النصوص العربية.
- يشمل ألوان وأحجام الأزرار، وتصميم البطاقات.

### 3. **ملف الجافا سكريبت (adhkar.js)**
- يحتوي على الوظائف التالية:
  - **fetchAdhkar**: لتحميل بيانات الأذكار من ملف `adhkar.json`.
  - **renderAdhkar**: لعرض الأذكار على الصفحة بناءً على الفئة المحددة.
  - **handleCounterClick**: لتحديث التقدم عند الضغط على زر "تمت القراءة".
  - **localStorage**: لحفظ واسترجاع تقدم المستخدم.

### 4. **ملف الأذكار (adhkar.json)**
- يحتوي على بيانات الأذكار مقسمة إلى فئات:
  - `adhkar`: أذكار الصباح.
  - `adhkar_masaa`: أذكار المساء.
  - `adhkar_nawm`: أذكار النوم.
  - `adhkar_baad_salah`: أذكار بعد الصلاة.
  - `adhkar_mutafariqa`: أذكار متفرقة.

---

## 🚀 كيفية تشغيل الموقع | How to Run the Website

1. **تشغيل الموقع محليًا | Run Locally**:
   - تأكد من أن جميع الملفات موجودة في نفس المجلد.
   - استخدم خادم محلي مثل:
     - **Python**:
       ```bash
       python -m http.server
       ```
       ثم افتح `http://localhost:8000` في المتصفح.
     - **VS Code Live Server**:
       - قم بتثبيت إضافة "Live Server" في VS Code.
       - انقر بزر الماوس الأيمن على `index.html` واختر "Open with Live Server".

2. **تصفح الموقع | Browse the Website**:
   - افتح الصفحة الرئيسية `index.html`.
   - اختر فئة الأذكار من أزرار التصفية.
   - اضغط على زر "تمت القراءة" لتتبع تقدمك.

---

## 🌟 ميزات الموقع | Features

- **عرض الأذكار**: يتم عرض الأذكار في بطاقات مع النصوص والمصادر.
- **تتبع التقدم**: يمكن للمستخدم تتبع عدد مرات قراءة كل ذكر.
- **حفظ التقدم**: يتم حفظ التقدم باستخدام `localStorage`، مما يسمح للمستخدم بالعودة لاحقًا دون فقدان البيانات.
- **تصميم متجاوب**: الموقع متوافق مع الأجهزة المختلفة (الهاتف، التابلت، الكمبيوتر).

---

## 📌 ملاحظات للمطورين | Notes for Developers

1. **إضافة أذكار جديدة | Adding New Supplications**:
   - قم بإضافة الأذكار الجديدة إلى ملف `adhkar.json` ضمن الفئة المناسبة.
   - تأكد من أن كل ذكر يحتوي على الحقول التالية:
     ```json
     {
         "id": "unique_id",
         "category": "الفئة",
         "text": "النص",
         "count_total": عدد مرات التكرار,
         "source": "المصدر"
     }
     ```

2. **تعديل التنسيقات | Modifying Styles**:
   - قم بتعديل ملف `styles.css` لتغيير الألوان أو التصميم.

3. **إصلاح الأخطاء | Debugging**:
   - تحقق من الأخطاء في وحدة التحكم (Console) في المتصفح.
   - تأكد من أن ملف `adhkar.json` خالٍ من الأخطاء باستخدام أداة تحقق JSON مثل [https://jsonlint.com/](https://jsonlint.com/).

---

## 📝 حقوق الملكية | License

هذا المشروع مفتوح المصدر ويمكن استخدامه وتعديله بحرية.

This project is open-source and can be freely used and modified.


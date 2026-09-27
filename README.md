<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>شركة إتش إم إي للتجارة الإلكترونية المحدودة</title>
    <!-- استدعاء إطار العمل Tailwind CSS -->
    <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
</head>
<body class="bg-gray-50 text-gray-800 font-sans">

    <!-- شريط التنقل العلوي -->
    <header class="bg-white shadow-sm sticky top-0 z-40">
        <div class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <h1 class="text-xl font-bold text-blue-600">HMA Company</h1>
            <nav class="hidden md:flex gap-6 text-sm font-medium">
                <a href="#about" class="hover:text-blue-600">من نحن</a>
                <a href="#services" class="hover:text-blue-600">خدماتنا</a>
                <a href="#contact" class="hover:text-blue-600">اتصل بنا</a>
            </nav>
        </div>
    </header>

    <!-- الواجهة الرئيسية (Hero Section) -->
    <section class="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-4 text-center">
        <div class="max-w-3xl mx-auto">
            <h2 class="text-4xl font-extrabold mb-4">شركة إتش إم إي للتجارة الإلكترونية المحدودة</h2>
            <p class="text-lg text-blue-100 mb-8">بوابتك الموثوقة لأحدث المنتجات والخدمات الرقمية والتجارية بجودة عالية وأسعار منافسة.</p>
            <a href="https://wa.me/249998040864?text=السلام%20عليكم،%20أرغب%20بالاستفسار%20عن%20منتجات%20وخدمات%20شركة%20إتش%20إم%20إي" 
               target="_blank" 
               class="bg-white text-blue-700 font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-blue-50 transition duration-300 inline-block">
               تواصل معنا عبر واتساب
            </a>
        </div>
    </section>

    <!-- قسم من نحن -->
    <section id="about" class="py-16 px-4 max-w-4xl mx-auto text-center">
        <h3 class="text-2xl font-bold mb-4 text-gray-900">من نحن</h3>
        <p class="text-gray-600 leading-relaxed text-lg">
            نحن شركة إتش إم إي للتجارة الإلكترونية، نسعى لتقديم تجربة تسوق رقمية فريدة ومبتكرة. نلتزم بتوفير أفضل المنتجات والخدمات التي تلبي احتياجات عملائنا وتواكب تطلعاتهم بكل احترافية ومصداقية.
        </p>
    </section>

    <!-- قسم الخدمات والحلول الرقمية -->
    <section id="services" class="bg-gray-100 py-16 px-4">
        <div class="max-w-6xl mx-auto text-center">
            <h3 class="text-2xl font-bold mb-4 text-gray-900">حلول رقمية وإعلامية متكاملة</h3>
            <p class="text-gray-600 mb-10 max-w-2xl mx-auto">نقدم منظومات برمجية، وتصميم مواقع وتطبيقات حسب الطلب، بالإضافة إلى خدمات الإنتاج الإعلامي والإعلاني المبتكرة.</p>
            
            <div class="grid md:grid-cols-3 gap-6 text-right">
                <div class="bg-white p-6 rounded-2xl shadow-sm">
                    <h4 class="font-bold text-lg mb-2 text-blue-600">تصميم وتطوير المواقع</h4>
                    <p class="text-gray-600 text-sm">بناء واجهات رقمية احترافية وسريعة تناسب أنشطتك التجارية.</p>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm">
                    <h4 class="font-bold text-lg mb-2 text-blue-600">الحلول البرمجية</h4>
                    <p class="text-gray-600 text-sm">منظومات برمجية وحلول مخصصة لتسهيل إدارة أعمالك ومخزونك.</p>
                </div>
                <div class="bg-white p-6 rounded-2xl shadow-sm">
                    <h4 class="font-bold text-lg mb-2 text-blue-600">الإنتاج الإعلامي</h4>
                    <p class="text-gray-600 text-sm">فيديوهات ترويجية وحملات إعلانية تزيد من انتشار نشاطك التجاري.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- قسم تواصل معنا ودعوة اتخاذ إجراء -->
    <section id="contact" class="py-16 px-4 text-center">
        <div class="max-w-3xl mx-auto">
            <h3 class="text-2xl font-bold mb-4 text-gray-900">تواصل معنا واستفسر عن خدماتنا</h3>
            <p class="text-gray-600 mb-8">نرحب دائماً باستفساراتكم وطلباتكم التجارية عبر الأرقام الرسمية.</p>
            <a href="https://wa.me/249998040864?text=السلام%20عليكم،%20أرغب%20في%20طلب%20خدمة%20من%20شركة%20إتش%20إم%20إي" 
               target="_blank" 
               class="bg-blue-600 text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition duration-300 inline-block">
               اطلب الخدمة عبر واتساب
            </a>
        </div>
    </section>

    <!-- الفوتر -->
    <footer class="bg-gray-900 text-white py-6 text-center text-sm">
        <p>جميع حقوق الطبع والنشر محفوظة © 2026 شركة إتش إم إي للتجارة الإلكترونية المحدودة</p>
    </footer>

    <!-- زر الواتساب العائم في أسفل الشاشة -->
    <a href="https://wa.me/249998040864?text=السلام%20عليكم،%20أرغب%20بالاستفسار%20عن%20خدماتكم%20في%20شركة%20إتش%20إم%20إي" 
       target="_blank" 
       class="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all duration-300 flex items-center justify-center z-50 animate-bounce"
       title="تواصل معنا عبر واتساب">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
    </a>

</body>
</html>

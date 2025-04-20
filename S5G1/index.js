const siteContent = {
    // BU NESNEYİ DEĞİŞTİRMEYİN
    title: 'Balboa',
    logo: '/Users/samikaya/Desktop/JS/sprint5/proje1/görev1/balboa_logo.jpg',
    links: [
      {
        href: 'programlarimiz.html',
        text: 'Danslarımız',
      },
      {
        href: 'blog.html',
        text: 'Videolar',
      },
      {
        href: 'sorulariniz.html',
        text: 'Sorularınız',
      },
      {
        href: 'hakkimizda.html',
        text: 'Hakkımızda',
      },
    ],
   };
   
   
   /* Kodlar Buradan aşağıya */

const titleItem = document.getElementsByTagName('title');
titleItem[0].textContent = siteContent.title;
  
const logoItem = document.getElementById("logo-img");
logoItem.src = siteContent.logo;

const linksItem = document.getElementsByTagName("a");
for (let i = 0; i<linksItem.length; i++) {
    linksItem[i].href = siteContent.links[i].href;
    linksItem[i].textContent = siteContent.links[i].text;
}
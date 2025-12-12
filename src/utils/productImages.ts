// Complete product images mapping for all 77 products
// Images are now hosted on ImageKit CDN
// Base URL: https://ik.imagekit.io/4t2j2ial6/

const IMAGEKIT_BASE = 'https://ik.imagekit.io/4t2j2ial6'

// Helper function to generate ImageKit URL from local path
const getImageUrl = (path: string): string => {
  // Remove '../assets/' prefix and add base URL
  const cleanPath = path.replace('../assets/', '')
  return `${IMAGEKIT_BASE}/${cleanPath}`
}

// ===== SPRING 23 COLLECTION - 56 PRODUCTS =====

// 1. SAMIRA
const samira1 = getImageUrl('assets/clothing/1. first capsule - spring 23/1-SAMIRA-90-950/1.jpg')
const samira2 = getImageUrl('assets/clothing/1. first capsule - spring 23/1-SAMIRA-90-950/2.jpg')
const samira3 = getImageUrl('assets/clothing/1. first capsule - spring 23/1-SAMIRA-90-950/3.jpg')
const samira4 = getImageUrl('assets/clothing/1. first capsule - spring 23/1-SAMIRA-90-950/4.jpg')
const samira5 = getImageUrl('assets/clothing/1. first capsule - spring 23/1-SAMIRA-90-950/5.jpg')

// 2. AHMAR
const ahmar1 = getImageUrl('assets/clothing/1. first capsule - spring 23/2 - Ahmar - 70 - 1050/1.jpg')
const ahmar2 = getImageUrl('assets/clothing/1. first capsule - spring 23/2 - Ahmar - 70 - 1050/2.jpg')
const ahmar3 = getImageUrl('assets/clothing/1. first capsule - spring 23/2 - Ahmar - 70 - 1050/3.jpg')
const ahmar4 = getImageUrl('assets/clothing/1. first capsule - spring 23/2 - Ahmar - 70 - 1050/4.jpg')
const ahmar5 = getImageUrl('assets/clothing/1. first capsule - spring 23/2 - Ahmar - 70 - 1050/5.jpg')

// 3. VERSACE
const versace1 = getImageUrl('assets/clothing/1. first capsule - spring 23/3-VERSACE-70-1050/1-.jpg')
const versace2 = getImageUrl('assets/clothing/1. first capsule - spring 23/3-VERSACE-70-1050/2-.jpg')
const versace3 = getImageUrl('assets/clothing/1. first capsule - spring 23/3-VERSACE-70-1050/3-.jpg')
const versace4 = getImageUrl('assets/clothing/1. first capsule - spring 23/3-VERSACE-70-1050/4-.jpg')
const versace5 = getImageUrl('assets/clothing/1. first capsule - spring 23/3-VERSACE-70-1050/5.jpg')

// 4. MATHILDE
const mathilde1 = getImageUrl('assets/clothing/1. first capsule - spring 23/4-Mathilde-70-1150/1.jpg')
const mathilde2 = getImageUrl('assets/clothing/1. first capsule - spring 23/4-Mathilde-70-1150/2.jpg')
const mathilde3 = getImageUrl('assets/clothing/1. first capsule - spring 23/4-Mathilde-70-1150/3.jpg')
const mathilde4 = getImageUrl('assets/clothing/1. first capsule - spring 23/4-Mathilde-70-1150/4.jpg')
const mathilde5 = getImageUrl('assets/clothing/1. first capsule - spring 23/4-Mathilde-70-1150/5.jpg')

// 5. AZRAM
const azram1 = getImageUrl('assets/clothing/1. first capsule - spring 23/5-Azram-80-950/1.jpg')
const azram2 = getImageUrl('assets/clothing/1. first capsule - spring 23/5-Azram-80-950/2.jpg')
const azram3 = getImageUrl('assets/clothing/1. first capsule - spring 23/5-Azram-80-950/3.jpg')
const azram4 = getImageUrl('assets/clothing/1. first capsule - spring 23/5-Azram-80-950/4.jpg')
const azram5 = getImageUrl('assets/clothing/1. first capsule - spring 23/5-Azram-80-950/5.jpg')

// 6. LIMON
const limon1 = getImageUrl('assets/clothing/1. first capsule - spring 23/6-LIMON-70-1250/1.jpg')
const limon2 = getImageUrl('assets/clothing/1. first capsule - spring 23/6-LIMON-70-1250/2.jpg')
const limon3 = getImageUrl('assets/clothing/1. first capsule - spring 23/6-LIMON-70-1250/3.jpg')
const limon4 = getImageUrl('assets/clothing/1. first capsule - spring 23/6-LIMON-70-1250/4.jpg')
const limon5 = getImageUrl('assets/clothing/1. first capsule - spring 23/6-LIMON-70-1250/5.jpg')

// 7. RAIN
const rain1 = getImageUrl('assets/clothing/1. first capsule - spring 23/7-RAIN-70-1050/1.jpg')
const rain2 = getImageUrl('assets/clothing/1. first capsule - spring 23/7-RAIN-70-1050/2.jpg')
const rain3 = getImageUrl('assets/clothing/1. first capsule - spring 23/7-RAIN-70-1050/3.jpg')
const rain4 = getImageUrl('assets/clothing/1. first capsule - spring 23/7-RAIN-70-1050/4.jpg')
const rain5 = getImageUrl('assets/clothing/1. first capsule - spring 23/7-RAIN-70-1050/5.jpg')

// 8. MRK
const mrk1 = getImageUrl('assets/clothing/1. first capsule - spring 23/8-MRK-80-1050/1.jpg')
const mrk2 = getImageUrl('assets/clothing/1. first capsule - spring 23/8-MRK-80-1050/2.jpg')
const mrk3 = getImageUrl('assets/clothing/1. first capsule - spring 23/8-MRK-80-1050/3.jpg')
const mrk4 = getImageUrl('assets/clothing/1. first capsule - spring 23/8-MRK-80-1050/4.jpg')
const mrk5 = getImageUrl('assets/clothing/1. first capsule - spring 23/8-MRK-80-1050/5.jpg')

// 9. DIAB
const diab1 = getImageUrl('assets/clothing/1. first capsule - spring 23/9-DIAB-80-1350/1.jpg')
const diab2 = getImageUrl('assets/clothing/1. first capsule - spring 23/9-DIAB-80-1350/2.jpg')
const diab3 = getImageUrl('assets/clothing/1. first capsule - spring 23/9-DIAB-80-1350/3.jpg')
const diab4 = getImageUrl('assets/clothing/1. first capsule - spring 23/9-DIAB-80-1350/4.jpg')
const diab5 = getImageUrl('assets/clothing/1. first capsule - spring 23/9-DIAB-80-1350/5.jpg')

// 10. ZAYTON
const zayton1 = getImageUrl('assets/clothing/1. first capsule - spring 23/10-ZAYTON-80-950/1.jpg')
const zayton2 = getImageUrl('assets/clothing/1. first capsule - spring 23/10-ZAYTON-80-950/2.jpg')
const zayton3 = getImageUrl('assets/clothing/1. first capsule - spring 23/10-ZAYTON-80-950/3.jpg')
const zayton4 = getImageUrl('assets/clothing/1. first capsule - spring 23/10-ZAYTON-80-950/4.jpg')
const zayton5 = getImageUrl('assets/clothing/1. first capsule - spring 23/10-ZAYTON-80-950/5.jpg')
const zayton6 = getImageUrl('assets/clothing/1. first capsule - spring 23/10-ZAYTON-80-950/6.jpg')

// 11. DOUNIA
const dounia1 = getImageUrl('assets/clothing/1. first capsule - spring 23/11-DOUNIA-90-1350/1.jpg')
const dounia2 = getImageUrl('assets/clothing/1. first capsule - spring 23/11-DOUNIA-90-1350/2.jpg')
const dounia3 = getImageUrl('assets/clothing/1. first capsule - spring 23/11-DOUNIA-90-1350/3.jpg')
const dounia4 = getImageUrl('assets/clothing/1. first capsule - spring 23/11-DOUNIA-90-1350/4.jpg')
const dounia5 = getImageUrl('assets/clothing/1. first capsule - spring 23/11-DOUNIA-90-1350/5.jpg')

// 12. AL KAMAR
const alkamar1 = getImageUrl('assets/clothing/1. first capsule - spring 23/12-Al Kamar-80-1500/1.jpg')
const alkamar2 = getImageUrl('assets/clothing/1. first capsule - spring 23/12-Al Kamar-80-1500/2.jpg')
const alkamar3 = getImageUrl('assets/clothing/1. first capsule - spring 23/12-Al Kamar-80-1500/3.jpg')
const alkamar4 = getImageUrl('assets/clothing/1. first capsule - spring 23/12-Al Kamar-80-1500/4.jpg')
const alkamar5 = getImageUrl('assets/clothing/1. first capsule - spring 23/12-Al Kamar-80-1500/5.jpg')

// 13. ANYA
const anya1 = getImageUrl('assets/clothing/1. first capsule - spring 23/13-ANYA-90-850/1.jpg')
const anya2 = getImageUrl('assets/clothing/1. first capsule - spring 23/13-ANYA-90-850/2.jpg')
const anya3 = getImageUrl('assets/clothing/1. first capsule - spring 23/13-ANYA-90-850/3.jpg')
const anya4 = getImageUrl('assets/clothing/1. first capsule - spring 23/13-ANYA-90-850/4.jpg')
const anya5 = getImageUrl('assets/clothing/1. first capsule - spring 23/13-ANYA-90-850/5.jpg')

// 14. AHMAR II
const ahmar2_1 = getImageUrl('assets/clothing/1. first capsule - spring 23/14-AHMAR-70-1050/1.jpg')
const ahmar2_2 = getImageUrl('assets/clothing/1. first capsule - spring 23/14-AHMAR-70-1050/2.jpg')
const ahmar2_3 = getImageUrl('assets/clothing/1. first capsule - spring 23/14-AHMAR-70-1050/3.jpg')
const ahmar2_4 = getImageUrl('assets/clothing/1. first capsule - spring 23/14-AHMAR-70-1050/4.jpg')
const ahmar2_5 = getImageUrl('assets/clothing/1. first capsule - spring 23/14-AHMAR-70-1050/5.jpg')
const ahmar2_6 = getImageUrl('assets/clothing/1. first capsule - spring 23/14-AHMAR-70-1050/6.jpg')

// 15. ISA
const isa1 = getImageUrl('assets/clothing/1. first capsule - spring 23/15-ISA-70-1250/1.jpg')
const isa2 = getImageUrl('assets/clothing/1. first capsule - spring 23/15-ISA-70-1250/2.jpg')
const isa3 = getImageUrl('assets/clothing/1. first capsule - spring 23/15-ISA-70-1250/3.jpg')
const isa4 = getImageUrl('assets/clothing/1. first capsule - spring 23/15-ISA-70-1250/4.jpg')
const isa5 = getImageUrl('assets/clothing/1. first capsule - spring 23/15-ISA-70-1250/5.jpg')
const isa6 = getImageUrl('assets/clothing/1. first capsule - spring 23/15-ISA-70-1250/6.jpg')
const isa7 = getImageUrl('assets/clothing/1. first capsule - spring 23/15-ISA-70-1250/7.jpg')

// 16. PEA
const pea1 = getImageUrl('assets/clothing/1. first capsule - spring 23/16-PEA-70-1150/1.jpg')
const pea2 = getImageUrl('assets/clothing/1. first capsule - spring 23/16-PEA-70-1150/2.jpg')
const pea3 = getImageUrl('assets/clothing/1. first capsule - spring 23/16-PEA-70-1150/3.jpg')
const pea4 = getImageUrl('assets/clothing/1. first capsule - spring 23/16-PEA-70-1150/4.jpg')
const pea5 = getImageUrl('assets/clothing/1. first capsule - spring 23/16-PEA-70-1150/5.jpg')
const pea6 = getImageUrl('assets/clothing/1. first capsule - spring 23/16-PEA-70-1150/6.jpg')
const pea7 = getImageUrl('assets/clothing/1. first capsule - spring 23/16-PEA-70-1150/7.jpg')

// 17. LEILA
const leila1 = getImageUrl('assets/clothing/1. first capsule - spring 23/17-LEILA-80-1050/1.jpg')
const leila2 = getImageUrl('assets/clothing/1. first capsule - spring 23/17-LEILA-80-1050/2.jpg')
const leila3 = getImageUrl('assets/clothing/1. first capsule - spring 23/17-LEILA-80-1050/3.jpg')
const leila4 = getImageUrl('assets/clothing/1. first capsule - spring 23/17-LEILA-80-1050/4.jpg')
const leila5 = getImageUrl('assets/clothing/1. first capsule - spring 23/17-LEILA-80-1050/5.jpg')

// 18. FARY
const fary1 = getImageUrl('assets/clothing/1. first capsule - spring 23/18-FARY-70-1150/1.jpg')
const fary2 = getImageUrl('assets/clothing/1. first capsule - spring 23/18-FARY-70-1150/2.jpg')
const fary3 = getImageUrl('assets/clothing/1. first capsule - spring 23/18-FARY-70-1150/3.jpg')
const fary4 = getImageUrl('assets/clothing/1. first capsule - spring 23/18-FARY-70-1150/4.jpg')
const fary5 = getImageUrl('assets/clothing/1. first capsule - spring 23/18-FARY-70-1150/5.jpg')

// 19. BLUES
const blues1 = getImageUrl('assets/clothing/1. first capsule - spring 23/19-BLUES-70-1050/1.jpg')
const blues2 = getImageUrl('assets/clothing/1. first capsule - spring 23/19-BLUES-70-1050/2.jpg')
const blues3 = getImageUrl('assets/clothing/1. first capsule - spring 23/19-BLUES-70-1050/3.jpg')
const blues4 = getImageUrl('assets/clothing/1. first capsule - spring 23/19-BLUES-70-1050/4.jpg')
const blues5 = getImageUrl('assets/clothing/1. first capsule - spring 23/19-BLUES-70-1050/5.jpg')
const blues6 = getImageUrl('assets/clothing/1. first capsule - spring 23/19-BLUES-70-1050/6.jpg')

// 20. JASMIN
const jasmin1 = getImageUrl('assets/clothing/1. first capsule - spring 23/20-JASMIN-80-1350/1.jpg')
const jasmin2 = getImageUrl('assets/clothing/1. first capsule - spring 23/20-JASMIN-80-1350/2.jpg')
const jasmin3 = getImageUrl('assets/clothing/1. first capsule - spring 23/20-JASMIN-80-1350/3.jpg')
const jasmin4 = getImageUrl('assets/clothing/1. first capsule - spring 23/20-JASMIN-80-1350/4.jpg')
const jasmin5 = getImageUrl('assets/clothing/1. first capsule - spring 23/20-JASMIN-80-1350/5.jpg')

// 21. AZYL
const azyl1 = getImageUrl('assets/clothing/1. first capsule - spring 23/21-AZYL-80-1350/1.jpg')
const azyl2 = getImageUrl('assets/clothing/1. first capsule - spring 23/21-AZYL-80-1350/2.jpg')
const azyl3 = getImageUrl('assets/clothing/1. first capsule - spring 23/21-AZYL-80-1350/3.jpg')
const azyl4 = getImageUrl('assets/clothing/1. first capsule - spring 23/21-AZYL-80-1350/4.jpg')
const azyl5 = getImageUrl('assets/clothing/1. first capsule - spring 23/21-AZYL-80-1350/5.jpg')
const azyl6 = getImageUrl('assets/clothing/1. first capsule - spring 23/21-AZYL-80-1350/6.jpg')

// 22. KAMAR
const kamar1 = getImageUrl('assets/clothing/1. first capsule - spring 23/22-KAMAR-80-1500/1.jpg')
const kamar2 = getImageUrl('assets/clothing/1. first capsule - spring 23/22-KAMAR-80-1500/2.jpg')
const kamar3 = getImageUrl('assets/clothing/1. first capsule - spring 23/22-KAMAR-80-1500/3.jpg')
const kamar4 = getImageUrl('assets/clothing/1. first capsule - spring 23/22-KAMAR-80-1500/4.jpg')
const kamar5 = getImageUrl('assets/clothing/1. first capsule - spring 23/22-KAMAR-80-1500/5.jpg')

// 23. ABIA
const abia1 = getImageUrl('assets/clothing/1. first capsule - spring 23/23-ABIA-90-950/1.jpg')
const abia2 = getImageUrl('assets/clothing/1. first capsule - spring 23/23-ABIA-90-950/2.jpg')
const abia3 = getImageUrl('assets/clothing/1. first capsule - spring 23/23-ABIA-90-950/3.jpg')
const abia4 = getImageUrl('assets/clothing/1. first capsule - spring 23/23-ABIA-90-950/4.jpg')
const abia5 = getImageUrl('assets/clothing/1. first capsule - spring 23/23-ABIA-90-950/5.jpg')

// 24. OMAR
const omar1 = getImageUrl('assets/clothing/1. first capsule - spring 23/24-OMAR-80-1500/1.jpg')
const omar2 = getImageUrl('assets/clothing/1. first capsule - spring 23/24-OMAR-80-1500/2.jpg')
const omar3 = getImageUrl('assets/clothing/1. first capsule - spring 23/24-OMAR-80-1500/3.jpg')
const omar4 = getImageUrl('assets/clothing/1. first capsule - spring 23/24-OMAR-80-1500/4.jpg')
const omar5 = getImageUrl('assets/clothing/1. first capsule - spring 23/24-OMAR-80-1500/5.jpg')

// 25. AKHDAR
const akhdar1 = getImageUrl('assets/clothing/1. first capsule - spring 23/25-Akhdar-70-850/1.jpg')
const akhdar2 = getImageUrl('assets/clothing/1. first capsule - spring 23/25-Akhdar-70-850/2.jpg')
const akhdar3 = getImageUrl('assets/clothing/1. first capsule - spring 23/25-Akhdar-70-850/3.jpg')
const akhdar4 = getImageUrl('assets/clothing/1. first capsule - spring 23/25-Akhdar-70-850/4.jpg')
const akhdar5 = getImageUrl('assets/clothing/1. first capsule - spring 23/25-Akhdar-70-850/5.jpg')

// 26. JILIL
const jilil1 = getImageUrl('assets/clothing/1. first capsule - spring 23/26-JILIL-80-900/1.jpg')
const jilil2 = getImageUrl('assets/clothing/1. first capsule - spring 23/26-JILIL-80-900/2.jpg')
const jilil3 = getImageUrl('assets/clothing/1. first capsule - spring 23/26-JILIL-80-900/3.jpg')
const jilil4 = getImageUrl('assets/clothing/1. first capsule - spring 23/26-JILIL-80-900/4.jpg')
const jilil5 = getImageUrl('assets/clothing/1. first capsule - spring 23/26-JILIL-80-900/5.jpg')

// 27. ROSY
const rosy1 = getImageUrl('assets/clothing/1. first capsule - spring 23/27-ROSY-60-1250/1.jpg')
const rosy2 = getImageUrl('assets/clothing/1. first capsule - spring 23/27-ROSY-60-1250/2.jpg')
const rosy3 = getImageUrl('assets/clothing/1. first capsule - spring 23/27-ROSY-60-1250/3.jpg')
const rosy4 = getImageUrl('assets/clothing/1. first capsule - spring 23/27-ROSY-60-1250/4.jpg')
const rosy5 = getImageUrl('assets/clothing/1. first capsule - spring 23/27-ROSY-60-1250/5.jpg')

// 28. YAYA
const yaya1 = getImageUrl('assets/clothing/1. first capsule - spring 23/28-YAYA-80-950/1.jpg')
const yaya2 = getImageUrl('assets/clothing/1. first capsule - spring 23/28-YAYA-80-950/2.jpg')

// 29. PURPLE
const purple1 = getImageUrl('assets/clothing/1. first capsule - spring 23/29-PURPLE-80-1050/1.jpg')
const purple2 = getImageUrl('assets/clothing/1. first capsule - spring 23/29-PURPLE-80-1050/2.jpg')
const purple3 = getImageUrl('assets/clothing/1. first capsule - spring 23/29-PURPLE-80-1050/3.jpg')
const purple4 = getImageUrl('assets/clothing/1. first capsule - spring 23/29-PURPLE-80-1050/4.jpg')
const purple5 = getImageUrl('assets/clothing/1. first capsule - spring 23/29-PURPLE-80-1050/5.jpg')
const purple6 = getImageUrl('assets/clothing/1. first capsule - spring 23/29-PURPLE-80-1050/6.jpg')

// 30. GOLD
const gold1 = getImageUrl('assets/clothing/1. first capsule - spring 23/30-GOLD-80-950/1.jpg')
const gold2 = getImageUrl('assets/clothing/1. first capsule - spring 23/30-GOLD-80-950/2.jpg')
const gold3 = getImageUrl('assets/clothing/1. first capsule - spring 23/30-GOLD-80-950/3.jpg')
const gold4 = getImageUrl('assets/clothing/1. first capsule - spring 23/30-GOLD-80-950/4.jpg')
const gold5 = getImageUrl('assets/clothing/1. first capsule - spring 23/30-GOLD-80-950/5.jpg')

// 31. HOUB
const houb1 = getImageUrl('assets/clothing/1. first capsule - spring 23/31-HOUB-80-1250/1.jpg')
const houb2 = getImageUrl('assets/clothing/1. first capsule - spring 23/31-HOUB-80-1250/2.jpg')
const houb3 = getImageUrl('assets/clothing/1. first capsule - spring 23/31-HOUB-80-1250/3.jpg')
const houb4 = getImageUrl('assets/clothing/1. first capsule - spring 23/31-HOUB-80-1250/4.jpg')
const houb5 = getImageUrl('assets/clothing/1. first capsule - spring 23/31-HOUB-80-1250/5.jpg')

// 32. AMIRA
const amira1 = getImageUrl('assets/clothing/1. first capsule - spring 23/32-Amira -80-1050/1-.jpg')
const amira2 = getImageUrl('assets/clothing/1. first capsule - spring 23/32-Amira -80-1050/2.jpg')
const amira3 = getImageUrl('assets/clothing/1. first capsule - spring 23/32-Amira -80-1050/3.jpg')
const amira4 = getImageUrl('assets/clothing/1. first capsule - spring 23/32-Amira -80-1050/4.jpg')
const amira5 = getImageUrl('assets/clothing/1. first capsule - spring 23/32-Amira -80-1050/5.jpg')

// 33. AHRAM
const ahram1 = getImageUrl('assets/clothing/1. first capsule - spring 23/33-Ahram-80-750/1.jpg')
const ahram2 = getImageUrl('assets/clothing/1. first capsule - spring 23/33-Ahram-80-750/2.jpg')
const ahram3 = getImageUrl('assets/clothing/1. first capsule - spring 23/33-Ahram-80-750/3.jpg')
const ahram4 = getImageUrl('assets/clothing/1. first capsule - spring 23/33-Ahram-80-750/4.jpg')
const ahram5 = getImageUrl('assets/clothing/1. first capsule - spring 23/33-Ahram-80-750/5.jpg')

// 34. BAB
const bab1 = getImageUrl('assets/clothing/1. first capsule - spring 23/34-BAB-90-799/1.jpg')
const bab2 = getImageUrl('assets/clothing/1. first capsule - spring 23/34-BAB-90-799/2.jpg')
const bab3 = getImageUrl('assets/clothing/1. first capsule - spring 23/34-BAB-90-799/3.jpg')
const bab4 = getImageUrl('assets/clothing/1. first capsule - spring 23/34-BAB-90-799/4.jpg')
const bab5 = getImageUrl('assets/clothing/1. first capsule - spring 23/34-BAB-90-799/5.jpg')
const bab6 = getImageUrl('assets/clothing/1. first capsule - spring 23/34-BAB-90-799/6.jpg')
const bab7 = getImageUrl('assets/clothing/1. first capsule - spring 23/34-BAB-90-799/7.jpg')

// 35. ALOUAN
const alouan1 = getImageUrl('assets/clothing/1. first capsule - spring 23/35-ALOUAN-80-1050/1.jpg')
const alouan2 = getImageUrl('assets/clothing/1. first capsule - spring 23/35-ALOUAN-80-1050/2.jpg')
const alouan3 = getImageUrl('assets/clothing/1. first capsule - spring 23/35-ALOUAN-80-1050/3.jpg')
const alouan4 = getImageUrl('assets/clothing/1. first capsule - spring 23/35-ALOUAN-80-1050/4.jpg')
const alouan5 = getImageUrl('assets/clothing/1. first capsule - spring 23/35-ALOUAN-80-1050/5.jpg')

// 36. MARIA
const maria1 = getImageUrl('assets/clothing/1. first capsule - spring 23/36-Maria-70-1150/1.jpg')
const maria2 = getImageUrl('assets/clothing/1. first capsule - spring 23/36-Maria-70-1150/2.jpg')
const maria3 = getImageUrl('assets/clothing/1. first capsule - spring 23/36-Maria-70-1150/3-.jpg')
const maria4 = getImageUrl('assets/clothing/1. first capsule - spring 23/36-Maria-70-1150/4.jpg')
const maria5 = getImageUrl('assets/clothing/1. first capsule - spring 23/36-Maria-70-1150/5.jpg')

// 37. ZIN
const zin1 = getImageUrl('assets/clothing/1. first capsule - spring 23/37-ZIN-70-1250/1.jpg')
const zin2 = getImageUrl('assets/clothing/1. first capsule - spring 23/37-ZIN-70-1250/2.jpg')
const zin3 = getImageUrl('assets/clothing/1. first capsule - spring 23/37-ZIN-70-1250/3.jpg')
const zin4 = getImageUrl('assets/clothing/1. first capsule - spring 23/37-ZIN-70-1250/4.jpg')
const zin5 = getImageUrl('assets/clothing/1. first capsule - spring 23/37-ZIN-70-1250/5.jpg')

// 38. PUCH
const puch1 = getImageUrl('assets/clothing/1. first capsule - spring 23/38-PUCH-80-1350/1.jpg')
const puch2 = getImageUrl('assets/clothing/1. first capsule - spring 23/38-PUCH-80-1350/2.jpg')
const puch3 = getImageUrl('assets/clothing/1. first capsule - spring 23/38-PUCH-80-1350/3.jpg')
const puch4 = getImageUrl('assets/clothing/1. first capsule - spring 23/38-PUCH-80-1350/4.jpg')
const puch5 = getImageUrl('assets/clothing/1. first capsule - spring 23/38-PUCH-80-1350/5.jpg')

// 39. LYS
const lys1 = getImageUrl('assets/clothing/1. first capsule - spring 23/39-LYS-90-850/1.jpg')
const lys2 = getImageUrl('assets/clothing/1. first capsule - spring 23/39-LYS-90-850/2.jpg')
const lys3 = getImageUrl('assets/clothing/1. first capsule - spring 23/39-LYS-90-850/3.jpg')
const lys4 = getImageUrl('assets/clothing/1. first capsule - spring 23/39-LYS-90-850/4.jpg')
const lys5 = getImageUrl('assets/clothing/1. first capsule - spring 23/39-LYS-90-850/5.jpg')
const lys6 = getImageUrl('assets/clothing/1. first capsule - spring 23/39-LYS-90-850/6.jpg')
const lys7 = getImageUrl('assets/clothing/1. first capsule - spring 23/39-LYS-90-850/7.jpg')

// 40. IMANE - SKIP (folder is empty)

// 41. ORANGE
const orange1 = getImageUrl('assets/clothing/1. first capsule - spring 23/41-ORANGE-90-950/1.jpg')
const orange2 = getImageUrl('assets/clothing/1. first capsule - spring 23/41-ORANGE-90-950/2.jpg')
const orange3 = getImageUrl('assets/clothing/1. first capsule - spring 23/41-ORANGE-90-950/3.jpg')
const orange4 = getImageUrl('assets/clothing/1. first capsule - spring 23/41-ORANGE-90-950/4.jpg')
const orange5 = getImageUrl('assets/clothing/1. first capsule - spring 23/41-ORANGE-90-950/5.jpg')

// 42. HIND
const hind1 = getImageUrl('assets/clothing/1. first capsule - spring 23/42-HIND-70-1050/1.jpg')
const hind2 = getImageUrl('assets/clothing/1. first capsule - spring 23/42-HIND-70-1050/2.jpg')
const hind3 = getImageUrl('assets/clothing/1. first capsule - spring 23/42-HIND-70-1050/3.jpg')
const hind4 = getImageUrl('assets/clothing/1. first capsule - spring 23/42-HIND-70-1050/4.jpg')
const hind5 = getImageUrl('assets/clothing/1. first capsule - spring 23/42-HIND-70-1050/5.jpg')
const hind6 = getImageUrl('assets/clothing/1. first capsule - spring 23/42-HIND-70-1050/6.jpg')

// 43. JASMIN II
const jasmin2_1 = getImageUrl('assets/clothing/1. first capsule - spring 23/43-JASMIN-60-1050/1.jpg')
const jasmin2_2 = getImageUrl('assets/clothing/1. first capsule - spring 23/43-JASMIN-60-1050/2.jpg')
const jasmin2_3 = getImageUrl('assets/clothing/1. first capsule - spring 23/43-JASMIN-60-1050/3.jpg')
const jasmin2_4 = getImageUrl('assets/clothing/1. first capsule - spring 23/43-JASMIN-60-1050/4.jpg')
const jasmin2_5 = getImageUrl('assets/clothing/1. first capsule - spring 23/43-JASMIN-60-1050/5.jpg')

// 44. MAR
const mar1 = getImageUrl('assets/clothing/1. first capsule - spring 23/44-Mar-70-1050/1.jpg')
const mar2 = getImageUrl('assets/clothing/1. first capsule - spring 23/44-Mar-70-1050/2.jpg')
const mar3 = getImageUrl('assets/clothing/1. first capsule - spring 23/44-Mar-70-1050/3.jpg')
const mar4 = getImageUrl('assets/clothing/1. first capsule - spring 23/44-Mar-70-1050/4.jpg')
const mar5 = getImageUrl('assets/clothing/1. first capsule - spring 23/44-Mar-70-1050/5.jpg')

// 45. KIMI
const kimi1 = getImageUrl('assets/clothing/1. first capsule - spring 23/45-KIMI-70-1050/1-.jpg')
const kimi2 = getImageUrl('assets/clothing/1. first capsule - spring 23/45-KIMI-70-1050/2.jpg')
const kimi3 = getImageUrl('assets/clothing/1. first capsule - spring 23/45-KIMI-70-1050/3.jpg')
const kimi4 = getImageUrl('assets/clothing/1. first capsule - spring 23/45-KIMI-70-1050/4.jpg')
const kimi5 = getImageUrl('assets/clothing/1. first capsule - spring 23/45-KIMI-70-1050/5.jpg')

// 46. CHRISTIELLE
const christielle1 = getImageUrl('assets/clothing/1. first capsule - spring 23/46-CHRISTIELLE-60-1250/1.JPG')
const christielle2 = getImageUrl('assets/clothing/1. first capsule - spring 23/46-CHRISTIELLE-60-1250/2.jpg')
const christielle3 = getImageUrl('assets/clothing/1. first capsule - spring 23/46-CHRISTIELLE-60-1250/3.jpg')
const christielle4 = getImageUrl('assets/clothing/1. first capsule - spring 23/46-CHRISTIELLE-60-1250/4.jpg')
const christielle5 = getImageUrl('assets/clothing/1. first capsule - spring 23/46-CHRISTIELLE-60-1250/5.jpg')

// 47. COQUELICOT
const coquelicot1 = getImageUrl('assets/clothing/1. first capsule - spring 23/47-COQUELICOT-90-950/1.jpg')
const coquelicot2 = getImageUrl('assets/clothing/1. first capsule - spring 23/47-COQUELICOT-90-950/2.jpg')
const coquelicot3 = getImageUrl('assets/clothing/1. first capsule - spring 23/47-COQUELICOT-90-950/3.jpg')
const coquelicot4 = getImageUrl('assets/clothing/1. first capsule - spring 23/47-COQUELICOT-90-950/4.jpg')
const coquelicot5 = getImageUrl('assets/clothing/1. first capsule - spring 23/47-COQUELICOT-90-950/5.jpg')

// 48. MAHIA
const mahia1 = getImageUrl('assets/clothing/1. first capsule - spring 23/48-MAHIA-60-1150/1.jpg')
const mahia2 = getImageUrl('assets/clothing/1. first capsule - spring 23/48-MAHIA-60-1150/2.jpg')
const mahia3 = getImageUrl('assets/clothing/1. first capsule - spring 23/48-MAHIA-60-1150/3.jpg')
const mahia4 = getImageUrl('assets/clothing/1. first capsule - spring 23/48-MAHIA-60-1150/4.jpg')
const mahia5 = getImageUrl('assets/clothing/1. first capsule - spring 23/48-MAHIA-60-1150/5.jpg')

// 49. MAY
const may1 = getImageUrl('assets/clothing/1. first capsule - spring 23/49-MAY-70-1150/1.jpg')
const may2 = getImageUrl('assets/clothing/1. first capsule - spring 23/49-MAY-70-1150/2.jpg')
const may3 = getImageUrl('assets/clothing/1. first capsule - spring 23/49-MAY-70-1150/3.jpg')
const may4 = getImageUrl('assets/clothing/1. first capsule - spring 23/49-MAY-70-1150/4.jpg')
const may5 = getImageUrl('assets/clothing/1. first capsule - spring 23/49-MAY-70-1150/5.jpg')

// 50. CARTIER
const cartier1 = getImageUrl('assets/clothing/1. first capsule - spring 23/50-CARTIER-70-1350/1.jpg')
const cartier2 = getImageUrl('assets/clothing/1. first capsule - spring 23/50-CARTIER-70-1350/2.jpg')

// 51. SULTAN
const sultan1 = getImageUrl('assets/clothing/1. first capsule - spring 23/51-SULTAN-70-1150/1.jpg')
const sultan2 = getImageUrl('assets/clothing/1. first capsule - spring 23/51-SULTAN-70-1150/2.jpg')
const sultan3 = getImageUrl('assets/clothing/1. first capsule - spring 23/51-SULTAN-70-1150/3.jpg')
const sultan4 = getImageUrl('assets/clothing/1. first capsule - spring 23/51-SULTAN-70-1150/4.jpg')
const sultan5 = getImageUrl('assets/clothing/1. first capsule - spring 23/51-SULTAN-70-1150/5.jpg')

// 52. BINE
const bine1 = getImageUrl('assets/clothing/1. first capsule - spring 23/52-BINE-90-950/1.jpg')
const bine2 = getImageUrl('assets/clothing/1. first capsule - spring 23/52-BINE-90-950/2.jpg')
const bine3 = getImageUrl('assets/clothing/1. first capsule - spring 23/52-BINE-90-950/3-.jpg')
const bine4 = getImageUrl('assets/clothing/1. first capsule - spring 23/52-BINE-90-950/4-.jpg')
const bine5 = getImageUrl('assets/clothing/1. first capsule - spring 23/52-BINE-90-950/5.jpg')

// 53. ZAHRA
const zahra1 = getImageUrl('assets/clothing/1. first capsule - spring 23/53-Zahra-90-950/1.jpg')
const zahra2 = getImageUrl('assets/clothing/1. first capsule - spring 23/53-Zahra-90-950/2.jpg')
const zahra3 = getImageUrl('assets/clothing/1. first capsule - spring 23/53-Zahra-90-950/3.jpg')
const zahra4 = getImageUrl('assets/clothing/1. first capsule - spring 23/53-Zahra-90-950/4.jpg')

// 54. BAC
const bac1 = getImageUrl('assets/clothing/1. first capsule - spring 23/54-BAC-80-1050/1.jpg')
const bac2 = getImageUrl('assets/clothing/1. first capsule - spring 23/54-BAC-80-1050/2.jpg')
const bac3 = getImageUrl('assets/clothing/1. first capsule - spring 23/54-BAC-80-1050/3.jpg')
const bac4 = getImageUrl('assets/clothing/1. first capsule - spring 23/54-BAC-80-1050/4.jpg')
const bac5 = getImageUrl('assets/clothing/1. first capsule - spring 23/54-BAC-80-1050/5.jpg')

// 55. ANGELA
const angela1 = getImageUrl('assets/clothing/1. first capsule - spring 23/55-Angela-70-1150/1.jpg')
const angela2 = getImageUrl('assets/clothing/1. first capsule - spring 23/55-Angela-70-1150/2.jpg')
const angela3 = getImageUrl('assets/clothing/1. first capsule - spring 23/55-Angela-70-1150/3.jpg')
const angela4 = getImageUrl('assets/clothing/1. first capsule - spring 23/55-Angela-70-1150/4.jpg')
const angela5 = getImageUrl('assets/clothing/1. first capsule - spring 23/55-Angela-70-1150/5.jpg')
const angela6 = getImageUrl('assets/clothing/1. first capsule - spring 23/55-Angela-70-1150/6.jpg')

// 56. LINA
const lina1 = getImageUrl('assets/clothing/1. first capsule - spring 23/56-LINA-60-1200/1.jpg')
const lina2 = getImageUrl('assets/clothing/1. first capsule - spring 23/56-LINA-60-1200/2.jpg')

// 57. STEF
const stef1 = getImageUrl('assets/clothing/1. first capsule - spring 23/57-Stef-70-1100/1.jpg')
const stef2 = getImageUrl('assets/clothing/1. first capsule - spring 23/57-Stef-70-1100/2.jpg')
const stef3 = getImageUrl('assets/clothing/1. first capsule - spring 23/57-Stef-70-1100/3.jpg')
const stef4 = getImageUrl('assets/clothing/1. first capsule - spring 23/57-Stef-70-1100/4.jpg')
const stef5 = getImageUrl('assets/clothing/1. first capsule - spring 23/57-Stef-70-1100/5.jpg')

// ===== WINTER 24 COLLECTION - 13 PRODUCTS =====

// 1. KHMISSA
const khmissa1 = getImageUrl('assets/clothing/2. second capsule - winter 24/1. Khmissa - 70 - 599/1.jpg')
const khmissa2 = getImageUrl('assets/clothing/2. second capsule - winter 24/1. Khmissa - 70 - 599/2.jpg')
const khmissa3 = getImageUrl('assets/clothing/2. second capsule - winter 24/1. Khmissa - 70 - 599/3.jpg')
const khmissa4 = getImageUrl('assets/clothing/2. second capsule - winter 24/1. Khmissa - 70 - 599/4.jpg')
const khmissa5 = getImageUrl('assets/clothing/2. second capsule - winter 24/1. Khmissa - 70 - 599/5.jpg')

// 2. WELLEDA
const welleda1 = getImageUrl('assets/clothing/2. second capsule - winter 24/2. Welleda - 70 - 499/1.jpg')
const welleda2 = getImageUrl('assets/clothing/2. second capsule - winter 24/2. Welleda - 70 - 499/2.jpg')
const welleda3 = getImageUrl('assets/clothing/2. second capsule - winter 24/2. Welleda - 70 - 499/3.jpg')
const welleda4 = getImageUrl('assets/clothing/2. second capsule - winter 24/2. Welleda - 70 - 499/4.jpg')
const welleda5 = getImageUrl('assets/clothing/2. second capsule - winter 24/2. Welleda - 70 - 499/5.jpg')

// 3. YAFIT
const yafit1 = getImageUrl('assets/clothing/2. second capsule - winter 24/3. Yafit - 80 - 499/1.jpg')
const yafit2 = getImageUrl('assets/clothing/2. second capsule - winter 24/3. Yafit - 80 - 499/2.jpg')
const yafit3 = getImageUrl('assets/clothing/2. second capsule - winter 24/3. Yafit - 80 - 499/3.jpg')

// 4. NATASHA
const natasha1 = getImageUrl('assets/clothing/2. second capsule - winter 24/4. Natasha - 80 - 699/1.jpg')
const natasha2 = getImageUrl('assets/clothing/2. second capsule - winter 24/4. Natasha - 80 - 699/2.jpg')
const natasha3 = getImageUrl('assets/clothing/2. second capsule - winter 24/4. Natasha - 80 - 699/3.jpg')
const natasha4 = getImageUrl('assets/clothing/2. second capsule - winter 24/4. Natasha - 80 - 699/4.jpg')
const natasha5 = getImageUrl('assets/clothing/2. second capsule - winter 24/4. Natasha - 80 - 699/5.jpg')

// 5. FAYROUZ
const fayrouz1 = getImageUrl('assets/clothing/2. second capsule - winter 24/5. Fayrouz - 80 - 699/1.jpg')
const fayrouz2 = getImageUrl('assets/clothing/2. second capsule - winter 24/5. Fayrouz - 80 - 699/2.jpg')
const fayrouz3 = getImageUrl('assets/clothing/2. second capsule - winter 24/5. Fayrouz - 80 - 699/3.jpg')
const fayrouz4 = getImageUrl('assets/clothing/2. second capsule - winter 24/5. Fayrouz - 80 - 699/4.jpg')
const fayrouz5 = getImageUrl('assets/clothing/2. second capsule - winter 24/5. Fayrouz - 80 - 699/5.jpg')
const fayrouz6 = getImageUrl('assets/clothing/2. second capsule - winter 24/5. Fayrouz - 80 - 699/6.jpg')

// 6. ATLAS
const atlas1 = getImageUrl('assets/clothing/2. second capsule - winter 24/6 -  Atlas - 750/1.jpg')
const atlas2 = getImageUrl('assets/clothing/2. second capsule - winter 24/6 -  Atlas - 750/2.jpg')
const atlas3 = getImageUrl('assets/clothing/2. second capsule - winter 24/6 -  Atlas - 750/3.jpg')
const atlas4 = getImageUrl('assets/clothing/2. second capsule - winter 24/6 -  Atlas - 750/4.jpg')
const atlas5 = getImageUrl('assets/clothing/2. second capsule - winter 24/6 -  Atlas - 750/5.jpg')
const atlas6 = getImageUrl('assets/clothing/2. second capsule - winter 24/6 -  Atlas - 750/6.jpg')

// 7. JABEL
const jabel1 = getImageUrl('assets/clothing/2. second capsule - winter 24/7 - Jabel - 80 - 699/1.jpg')
const jabel2 = getImageUrl('assets/clothing/2. second capsule - winter 24/7 - Jabel - 80 - 699/2.jpg')
const jabel3 = getImageUrl('assets/clothing/2. second capsule - winter 24/7 - Jabel - 80 - 699/3.jpg')
const jabel4 = getImageUrl('assets/clothing/2. second capsule - winter 24/7 - Jabel - 80 - 699/4.jpg')
const jabel5 = getImageUrl('assets/clothing/2. second capsule - winter 24/7 - Jabel - 80 - 699/5.jpg')

// 8. MROUZIA
const mrouzia1 = getImageUrl('assets/clothing/2. second capsule - winter 24/8 - Mrouzia - 70 - 799/1.jpg')
const mrouzia2 = getImageUrl('assets/clothing/2. second capsule - winter 24/8 - Mrouzia - 70 - 799/2.jpg')
const mrouzia3 = getImageUrl('assets/clothing/2. second capsule - winter 24/8 - Mrouzia - 70 - 799/3.jpg')
const mrouzia4 = getImageUrl('assets/clothing/2. second capsule - winter 24/8 - Mrouzia - 70 - 799/4.jpg')
const mrouzia5 = getImageUrl('assets/clothing/2. second capsule - winter 24/8 - Mrouzia - 70 - 799/5.jpg')

// 9. NOHA
const noha1 = getImageUrl('assets/clothing/2. second capsule - winter 24/9 - Noha - 70- 699/1.jpg')
const noha2 = getImageUrl('assets/clothing/2. second capsule - winter 24/9 - Noha - 70- 699/2.jpg')
const noha3 = getImageUrl('assets/clothing/2. second capsule - winter 24/9 - Noha - 70- 699/3.jpg')
const noha4 = getImageUrl('assets/clothing/2. second capsule - winter 24/9 - Noha - 70- 699/4.jpg')
const noha5 = getImageUrl('assets/clothing/2. second capsule - winter 24/9 - Noha - 70- 699/5.jpg')

// 10. MALEEK
const maleek1 = getImageUrl('assets/clothing/2. second capsule - winter 24/10 - Maleek - 80 - 599/1.jpg')
const maleek2 = getImageUrl('assets/clothing/2. second capsule - winter 24/10 - Maleek - 80 - 599/2.jpg')
const maleek3 = getImageUrl('assets/clothing/2. second capsule - winter 24/10 - Maleek - 80 - 599/3.jpg')
const maleek4 = getImageUrl('assets/clothing/2. second capsule - winter 24/10 - Maleek - 80 - 599/4.jpg')
const maleek5 = getImageUrl('assets/clothing/2. second capsule - winter 24/10 - Maleek - 80 - 599/5.jpg')
const maleek6 = getImageUrl('assets/clothing/2. second capsule - winter 24/10 - Maleek - 80 - 599/6.jpg')

// 11. AMAZI
const amazi1 = getImageUrl('assets/clothing/2. second capsule - winter 24/11 - Amazi - 80 - 599/1.jpg')
const amazi2 = getImageUrl('assets/clothing/2. second capsule - winter 24/11 - Amazi - 80 - 599/2.jpg')
const amazi3 = getImageUrl('assets/clothing/2. second capsule - winter 24/11 - Amazi - 80 - 599/3.jpg')
const amazi4 = getImageUrl('assets/clothing/2. second capsule - winter 24/11 - Amazi - 80 - 599/4.jpg')
const amazi5 = getImageUrl('assets/clothing/2. second capsule - winter 24/11 - Amazi - 80 - 599/5.jpg')
const amazi6 = getImageUrl('assets/clothing/2. second capsule - winter 24/11 - Amazi - 80 - 599/6.jpg')

// 12. OUMI
const oumi1 = getImageUrl('assets/clothing/2. second capsule - winter 24/12 - Oumi - 80 - 599/1.jpg')
const oumi2 = getImageUrl('assets/clothing/2. second capsule - winter 24/12 - Oumi - 80 - 599/2.jpg')
const oumi3 = getImageUrl('assets/clothing/2. second capsule - winter 24/12 - Oumi - 80 - 599/3.jpg')
const oumi4 = getImageUrl('assets/clothing/2. second capsule - winter 24/12 - Oumi - 80 - 599/4.jpg')
const oumi5 = getImageUrl('assets/clothing/2. second capsule - winter 24/12 - Oumi - 80 - 599/5.jpg')
const oumi6 = getImageUrl('assets/clothing/2. second capsule - winter 24/12 - Oumi - 80 - 599/6.jpg')

// 13. SAHA
const saha1 = getImageUrl('assets/clothing/2. second capsule - winter 24/13 - Saha - 70 - 699/1.jpg')
const saha2 = getImageUrl('assets/clothing/2. second capsule - winter 24/13 - Saha - 70 - 699/2.jpg')
const saha3 = getImageUrl('assets/clothing/2. second capsule - winter 24/13 - Saha - 70 - 699/3.jpg')
const saha4 = getImageUrl('assets/clothing/2. second capsule - winter 24/13 - Saha - 70 - 699/4.jpg')
const saha5 = getImageUrl('assets/clothing/2. second capsule - winter 24/13 - Saha - 70 - 699/5.jpg')
const saha6 = getImageUrl('assets/clothing/2. second capsule - winter 24/13 - Saha - 70 - 699/6.jpg')

// ===== AUTUMN 25 COLLECTION - 8 PRODUCTS =====

// 1. CHEETAH
const cheetah1 = getImageUrl('assets/clothing/3. third capsule - autumn 25/1. Cheetah/1.png')
const cheetah2 = getImageUrl('assets/clothing/3. third capsule - autumn 25/1. Cheetah/2.png')
const cheetah3 = getImageUrl('assets/clothing/3. third capsule - autumn 25/1. Cheetah/3.png')
const cheetah4 = getImageUrl('assets/clothing/3. third capsule - autumn 25/1. Cheetah/4.png')

// 2. AITAKAL
const aitakal1 = getImageUrl('assets/clothing/3. third capsule - autumn 25/2. Aitakal/1.png')
const aitakal2 = getImageUrl('assets/clothing/3. third capsule - autumn 25/2. Aitakal/2.png')
const aitakal3 = getImageUrl('assets/clothing/3. third capsule - autumn 25/2. Aitakal/3.png')
const aitakal4 = getImageUrl('assets/clothing/3. third capsule - autumn 25/2. Aitakal/4.png')
const aitakal5 = getImageUrl('assets/clothing/3. third capsule - autumn 25/2. Aitakal/5.png')

// 3. FETTAH
const fettah1 = getImageUrl('assets/clothing/3. third capsule - autumn 25/3. Fettah/1.png')
const fettah2 = getImageUrl('assets/clothing/3. third capsule - autumn 25/3. Fettah/2.png')
const fettah3 = getImageUrl('assets/clothing/3. third capsule - autumn 25/3. Fettah/3.png')
const fettah4 = getImageUrl('assets/clothing/3. third capsule - autumn 25/3. Fettah/4.png')

// 4. FIRE
const fire1 = getImageUrl('assets/clothing/3. third capsule - autumn 25/4. Fire/1.png')
const fire2 = getImageUrl('assets/clothing/3. third capsule - autumn 25/4. Fire/2.png')
const fire3 = getImageUrl('assets/clothing/3. third capsule - autumn 25/4. Fire/3.png')

// 5. DIOR
const dior1 = getImageUrl('assets/clothing/3. third capsule - autumn 25/5. Dior/1.png')
const dior2 = getImageUrl('assets/clothing/3. third capsule - autumn 25/5. Dior/2.png')
const dior3 = getImageUrl('assets/clothing/3. third capsule - autumn 25/5. Dior/3.png')
const dior4 = getImageUrl('assets/clothing/3. third capsule - autumn 25/5. Dior/4.png')

// 6. SAFARI
const safari1 = getImageUrl('assets/clothing/3. third capsule - autumn 25/6. Safari/1.png')
const safari2 = getImageUrl('assets/clothing/3. third capsule - autumn 25/6. Safari/2.png')
const safari3 = getImageUrl('assets/clothing/3. third capsule - autumn 25/6. Safari/3.png')
const safari4 = getImageUrl('assets/clothing/3. third capsule - autumn 25/6. Safari/4.png')

// 7. GOLDEN
const golden1 = getImageUrl('assets/clothing/3. third capsule - autumn 25/7. Golden/1.png')
const golden2 = getImageUrl('assets/clothing/3. third capsule - autumn 25/7. Golden/2.png')
const golden3 = getImageUrl('assets/clothing/3. third capsule - autumn 25/7. Golden/3.png')
const golden4 = getImageUrl('assets/clothing/3. third capsule - autumn 25/7. Golden/4.png')

// 8. ARIEL
const ariel1 = getImageUrl('assets/clothing/3. third capsule - autumn 25/8. Ariel/1.png')
const ariel2 = getImageUrl('assets/clothing/3. third capsule - autumn 25/8. Ariel/2.png')
const ariel3 = getImageUrl('assets/clothing/3. third capsule - autumn 25/8. Ariel/3.png')
const ariel4 = getImageUrl('assets/clothing/3. third capsule - autumn 25/8. Ariel/4.png')

// Export the complete mapping
export const productImages: Record<string, string[]> = {
  // Spring 23 - 56 products
  'samira': [samira1, samira2, samira3, samira4, samira5],
  'ahmar': [ahmar1, ahmar2, ahmar3, ahmar4, ahmar5],
  'versace': [versace1, versace2, versace3, versace4, versace5],
  'mathilde': [mathilde1, mathilde2, mathilde3, mathilde4, mathilde5],
  'azram': [azram1, azram2, azram3, azram4, azram5],
  'limon': [limon1, limon2, limon3, limon4, limon5],
  'rain': [rain1, rain2, rain3, rain4, rain5],
  'mrk': [mrk1, mrk2, mrk3, mrk4, mrk5],
  'diab': [diab1, diab2, diab3, diab4, diab5],
  'zayton': [zayton1, zayton2, zayton3, zayton4, zayton5, zayton6],
  'dounia': [dounia1, dounia2, dounia3, dounia4, dounia5],
  'alkamar': [alkamar1, alkamar2, alkamar3, alkamar4, alkamar5],
  'anya': [anya1, anya2, anya3, anya4, anya5],
  'ahmar2': [ahmar2_1, ahmar2_2, ahmar2_3, ahmar2_4, ahmar2_5, ahmar2_6],
  'isa': [isa1, isa2, isa3, isa4, isa5, isa6, isa7],
  'pea': [pea1, pea2, pea3, pea4, pea5, pea6, pea7],
  'leila': [leila1, leila2, leila3, leila4, leila5],
  'fary': [fary1, fary2, fary3, fary4, fary5],
  'blues': [blues1, blues2, blues3, blues4, blues5, blues6],
  'jasmin': [jasmin1, jasmin2, jasmin3, jasmin4, jasmin5],
  'azyl': [azyl1, azyl2, azyl3, azyl4, azyl5, azyl6],
  'kamar': [kamar1, kamar2, kamar3, kamar4, kamar5],
  'abia': [abia1, abia2, abia3, abia4, abia5],
  'omar': [omar1, omar2, omar3, omar4, omar5],
  'akhdar': [akhdar1, akhdar2, akhdar3, akhdar4, akhdar5],
  'jilil': [jilil1, jilil2, jilil3, jilil4, jilil5],
  'rosy': [rosy1, rosy2, rosy3, rosy4, rosy5],
  'yaya': [yaya1, yaya2],
  'purple': [purple1, purple2, purple3, purple4, purple5, purple6],
  'gold': [gold1, gold2, gold3, gold4, gold5],
  'houb': [houb1, houb2, houb3, houb4, houb5],
  'amira': [amira1, amira2, amira3, amira4, amira5],
  'ahram': [ahram1, ahram2, ahram3, ahram4, ahram5],
  'bab': [bab1, bab2, bab3, bab4, bab5, bab6, bab7],
  'alouan': [alouan1, alouan2, alouan3, alouan4, alouan5],
  'maria': [maria1, maria2, maria3, maria4, maria5],
  'zin': [zin1, zin2, zin3, zin4, zin5],
  'puch': [puch1, puch2, puch3, puch4, puch5],
  'lys': [lys1, lys2, lys3, lys4, lys5, lys6, lys7],
  'orange': [orange1, orange2, orange3, orange4, orange5],
  'hind': [hind1, hind2, hind3, hind4, hind5, hind6],
  'jasmin2': [jasmin2_1, jasmin2_2, jasmin2_3, jasmin2_4, jasmin2_5],
  'mar': [mar1, mar2, mar3, mar4, mar5],
  'kimi': [kimi1, kimi2, kimi3, kimi4, kimi5],
  'christielle': [christielle1, christielle2, christielle3, christielle4, christielle5],
  'coquelicot': [coquelicot1, coquelicot2, coquelicot3, coquelicot4, coquelicot5],
  'mahia': [mahia1, mahia2, mahia3, mahia4, mahia5],
  'may': [may1, may2, may3, may4, may5],
  'cartier': [cartier1, cartier2],
  'sultan': [sultan1, sultan2, sultan3, sultan4, sultan5],
  'bine': [bine1, bine2, bine3, bine4, bine5],
  'zahra': [zahra1, zahra2, zahra3, zahra4],
  'bac': [bac1, bac2, bac3, bac4, bac5],
  'angela': [angela1, angela2, angela3, angela4, angela5, angela6],
  'lina': [lina1, lina2],
  'stef': [stef1, stef2, stef3, stef4, stef5],
  
  // Winter 24 - 13 products
  'khmissa': [khmissa1, khmissa2, khmissa3, khmissa4, khmissa5],
  'welleda': [welleda1, welleda2, welleda3, welleda4, welleda5],
  'yafit': [yafit1, yafit2, yafit3],
  'natasha': [natasha1, natasha2, natasha3, natasha4, natasha5],
  'fayrouz': [fayrouz1, fayrouz2, fayrouz3, fayrouz4, fayrouz5, fayrouz6],
  'atlas': [atlas1, atlas2, atlas3, atlas4, atlas5, atlas6],
  'jabel': [jabel1, jabel2, jabel3, jabel4, jabel5],
  'mrouzia': [mrouzia1, mrouzia2, mrouzia3, mrouzia4, mrouzia5],
  'noha': [noha1, noha2, noha3, noha4, noha5],
  'maleek': [maleek1, maleek2, maleek3, maleek4, maleek5, maleek6],
  'amazi': [amazi1, amazi2, amazi3, amazi4, amazi5, amazi6],
  'oumi': [oumi1, oumi2, oumi3, oumi4, oumi5, oumi6],
  'saha': [saha1, saha2, saha3, saha4, saha5, saha6],
  
  // Autumn 25 - 8 products
  'cheetah': [cheetah1, cheetah2, cheetah3, cheetah4],
  'aitakal': [aitakal1, aitakal2, aitakal3, aitakal4, aitakal5],
  'fettah': [fettah1, fettah2, fettah3, fettah4],
  'fire': [fire1, fire2, fire3],
  'dior': [dior1, dior2, dior3, dior4],
  'safari': [safari1, safari2, safari3, safari4],
  'golden': [golden1, golden2, golden3, golden4],
  'ariel': [ariel1, ariel2, ariel3, ariel4],
}

// Helper function to get product images
export const getProductImages = (productId: string): string[] => {
  return productImages[productId] || []
}

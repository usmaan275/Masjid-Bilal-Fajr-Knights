const day2Questions = [
    {
      question: "Who was Prophet Musa’s brother?",
      options: [
        "A) Prophet Harun",
        "B) Prophet Yunus",
        "C) Prophet Yahya",
        "D) Prophet Yusuf"
      ],
      answer: "Prophet Harun",
      verse: "‫ثُمَّ بَعَثۡنَا مِنۢ بَعۡدِهِم مُّوسَىٰ وَهَـٰرُونَ إِلَىٰ فِرۡعَوۡنَ وَمَلَإِی۟هِۦ بِـَٔایَـٰتِنَا‬",
      translation: "We sent Musa and Harun to Pharaoh and his chiefs with Our signs. (10:75)",
      explanation: "Musa and Harun were brothers and they were sent by Allah to preach to Firawn and his men."
    },
    {
      question: "Which Prophet was sent to the nation of Thamud?",
      options: ["A) Prophet Hud", "B) Prophet Shuayb", "C) Prophet Salih", "D) Prophet Lut"],
      answer: "Prophet Salih",
      verse: "وَإِلَىٰ ثَمُودَ أَخَاهُمۡ صَـٰلِحࣰا",
      translation: "And to the people of Thamud We sent their brother Salih. (11:61)",
      explanation: "Allah sent the Prophet Salih to the nation of Thamud."
    },
    {
      question: "What brings reassurance to the heart?",
      options: ["A) Gaming", "B) Football", "C) School", "D) The remembrance of Allah"],
      answer: "The remembrance of Allah",
      verse: "‫أَلَا بِذِكۡرِ ٱللَّهِ تَطۡمَىِٕنُّ ٱلۡقُلُوبُ﴿ ٢٨ ﴾‬",
      translation: "Undoubtedly, hearts find comfort in the remembrance of Allah. (13:28)",
      explanation: "Nothing brings comfort to the heart in this world, except when we remember our Lord Allah."
    },
    {
      question: "How many gates does Jahannam (Hell) have?",
      options: ["A) 5", "B) 6", "C) 7", "D) 8"],
      answer: "7",
      verse: "‫وَإِنَّ جَهَنَّمَ لَمَوۡعِدُهُمۡ أَجۡمَعِینَ﴿ ٤٣ ﴾ ‫لَهَا سَبۡعَةُ أَبۡوَ ٰ⁠بࣲ‬",
      translation: "Indeed, Hell is all of their destined place. It has seven gates. (15:43-44)",
      explanation: "The people that don’t remember Allah and listen to the Shaytan will be sent to Jahannam."
    },
    {
      question: "Where did the Prophet ﷺ travel to on the night of Al-Isra wal-Miraj?",
      options: ["A) Masjid Al-Aqsa", "B) Masjid Al-Haram", "C) Madinah", "D) Mount Uhud"],
      answer: "Masjid Al-Aqsa",
      verse: "‫سُبۡحَـٰنَ ٱلَّذِیۤ أَسۡرَىٰ بِعَبۡدِهِۦ لَیۡلࣰا مِّنَ ٱلۡمَسۡجِدِ ٱلۡحَرَامِ إِلَى ٱلۡمَسۡجِدِ ٱلۡأَقۡصَا‬",
      translation: "Glory be to the One Who took His servant ˹Muhammad˺ by night from the Masjid Al-Haram to Masjid Al-Aqsa. (17:1)",
      explanation: "On this special night Allah took the Prophet ﷺ from Makkah to Jerusalem, and from there he rose up to the Heavens."
    },
    {
      question: "Which Prophet spoke as a baby in the cradle?",
      options: ["A) Prophet Isa", "B) Prophet Yahya", "C) Prophet Musa", "D) Prophet Yusuf"],
      answer: "Prophet Isa",
      verse: "‫قَالُوا۟ كَیۡفَ نُكَلِّمُ مَن كَانَ فِی ٱلۡمَهۡدِ صَبِیࣰّا﴿ ٢٩ ﴾ ‫قَالَ إِنِّی عَبۡدُ ٱللَّهِ‬",
      translation: "They exclaimed, “How can we talk to someone who is an infant in the cradle?” Isa declared, “I am truly a servant of Allah.” (19:29-30)",
      explanation: "This was one of Prophet Isa’s many miracles. He performed all these miracles with the permission of Allah."
    },
    {
      question: "Which Prophet had control of the wind?",
      options: ["A) Prophet Dawud", "B) Prophet Musa", "C) Prophet Sulayman", "D) Prophet Isa"],
      answer: "Prophet Sulayman",
      verse: "‫وَلِسُلَیۡمَـٰنَ ٱلرِّیحَ عَاصِفَةࣰ تَجۡرِی بِأَمۡرِهِۦۤ‬",
      translation: "And We gave Sulayman control of the raging winds, flowing by his command. (21:81)",
      explanation: "Allah gifted Sulayman control of the wind as a gift, and he was very grateful to Allah for this power."
    },
    {
      question: "What is the highest level of Jannah called?",
      options: ["A) Al-Firdaws", "B) Al-Kawthar", "C) Al-Ma’wa", "D) Al-Adn"],
      answer: "Al-Firdaws",
      verse: "‫أُو۟لَـٰۤىِٕكَ هُمُ ٱلۡوَ ٰ⁠رِثُونَ﴿ ١٠ ﴾ ‫ٱلَّذِینَ یَرِثُونَ ٱلۡفِرۡدَوۡسَ هُمۡ فِیهَا خَـٰلِدُونَ﴿ ١١ ﴾‬",
      translation: "These are the ones who will be awarded Al-Firdaws as their own. They will be there forever. (23:10-11)",
      explanation: "In the beginning of this Surah, Allah describes good people and says these people will go to Al-Firdaws — the highest level of Jannah."
    },
    {
      question: "Which Prophet had to help Ashab-ul-Aykah (the people of the forest)?",
      options: ["A) Prophet Hud", "B) Prophet Salih", "C) Prophet Shuayb", "D) Prophet Lut"],
      answer: "Prophet Shuayb",
      verse: "‫كَذَّبَ أَصۡحَـٰبُ لۡـَٔیۡكَةِ ٱلۡمُرۡسَلِینَ﴿ ١٧٦ ﴾ ‫إِذۡ قَالَ لَهُمۡ شُعَیۡبٌ أَلَا تَتَّقُونَ﴿ ١٧٧ ﴾‬",
      translation: "The residents of the Forest rejected the messengers when Shuayb said to them, “Will you not fear ˹Allah˺?” (26:176-177)",
      explanation: "Prophet Shuayb warned the people of the forest to turn back to the worship of Allah."
    },
    {
      question: "Which city did Prophet Musa flee to?",
      options: ["A) Madyan", "B) Egypt", "C) Jerusalem", "D) Damascus"],
      answer: "Madyan",
      verse: "‫فَخَرَجَ مِنۡهَا خَاۤىِٕفࣰا یَتَرَقَّبُۖ قَالَ رَبِّ نَجِّنِی مِنَ ٱلۡقَوۡمِ ٱلظَّـٰلِمِینَ﴿ ٢١ ﴾ ‫وَلَمَّا تَوَجَّهَ تِلۡقَاۤءَ مَدۡیَنَ‬",
      translation: "Musa left the city in a state of fear and caution, praying, “My Lord! Deliver me from the wrongdoing people.” And as he made his way towards Madyan… (28:21-22)",
      explanation: "The chiefs of Firawn were looking for Musa and wanted to kill him, so he left Egypt and fled to an Arab land called Madyan."
    }
  ];
  
  export default day2Questions;
  
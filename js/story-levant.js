/* Republic of Gerald Wu — 互动小说剧本：黎凡特《橄榄与灰烬》
   世界观：黎凡特联盟内战（1978 年 8 月爆发，1979 年 4 月大马士革城下）
   主角：大马士革中央医院外科住院医师
   结构：scenes 含 chapter / text / choices / ending；text 为 { zh: [...], en: [...] } */
window.STORY = {
  start: 'start',
  scenes: {
    start: {
      chapter: { en: 'Chapter I', zh: '第一章' },
      text: {
        zh: [
          '…大马士革，1979 年 4 月…',
          '你是大马士革中央医院的一名外科住院医师，第三年。今年秋天你本来要去贝鲁特进修——如果黎巴嫩还在的话。',
          '1950 年，叙利亚和黎巴嫩脱离法国统治，组成了黎凡特联盟。你父亲是独立庆典上的旗手，后来他在这家医院的药房干了三十年，去年冬天死在了这张病床上。',
          '1978 年 8 月 10 日，改革派袭击了总统哈菲兹·阿萨德。他毫发无伤。六天后，他宣布整个国家进入“将影响整个伊斯兰世界的紧急状态”——内战从那天起正式爆发。',
          '到今年 4 月，这片土地上已经死了两百多万人。去年 12 月，以法国和美国为首的北约部队在拉塔基亚登陆，支援叙利亚民主力量；苏联也把部队和导弹送进大马士革。西海岸大半失守，西部沙漠归苏联和共产党，哈萨坎归库尔德人，哈塔伊被承认为土耳其领土；总统逃到了埃及；第二共和国已经打到了城下。',
          '你只知道一件事：今天一早，第一批伤员已经抬进了急诊大厅，走廊上躺满了人。'
        ],
        en: [
          '…Damascus, April 1979…',
          'You are a third-year surgical resident at the Central Hospital of Damascus. This autumn you were to go to Beirut for further training — if there is still a Beirut.',
          'In 1950 Syria and Lebanon threw off French rule and formed the Levant Union. Your father carried the flag at the independence celebrations; later he worked thirty years in this hospital’s pharmacy, and last winter he died in one of its beds.',
          'On 10 August 1978, reformists attacked President Hafez al-Assad. He was unharmed. Six days later he declared the country in a “state of emergency that will affect the entire Islamic world” — and from that day the civil war formally began.',
          'By this April, more than two million people have died in this land. Last December, NATO forces led by France and the United States landed at Latakia in support of the Syrian Democratic Forces; the Soviet Union sent troops and missiles into Damascus. Most of the western coast has fallen; the western desert belongs to the Soviets and the communists; Hasakah belongs to the Kurds; Hatay is recognised as Turkish territory; the President has fled to Egypt; and the Second Republic has fought its way to the gates.',
          'You know those place names and numbers by heart, the way you know the anatomy plates. You know only one thing for certain: this morning the first wounded were carried into the emergency hall, and the corridors are full.'
        ]
      },
      choices: [
        { label: { en: 'Stay, and go into the operating theatre', zh: '留下，进手术室' }, next: 'hospital' },
        { label: { en: 'Go with the Red Crescent convoy and get the wounded out', zh: '跟红新月会的救护车队走，把伤员送出去' }, next: 'convoy' },
        { label: { en: 'Go home and bring your mother and sister out', zh: '回家，把母亲和妹妹接出来' }, next: 'family' }
      ]
    },

    /* ---- 医院支线 ---- */
    hospital: {
      chapter: { en: 'Chapter II', zh: '第二章' },
      text: {
        zh: [
          '发电机只够带动两台手术灯。血不够，吗啡不够，缝合线要拆开煮沸再用。',
          '凌晨三点，抬进来两个人：一个第二共和国的军官，腹部中弹，血压一直往下掉；一个十二岁的女孩，弹片进了肚子，她母亲攥着她的手，一直在念经。',
          '只有一张手术台空着。走廊里还有二十几个人在等，有人已经不说话了。',
          '护士站在你旁边，等你说一句话。'
        ],
        en: [
          'The generator can only carry two operating lamps. Not enough blood, not enough morphine, and the sutures have to be unpicked, boiled and used again.',
          'At three in the morning two patients are carried in: an officer of the Second Republic, shot in the abdomen, his blood pressure falling; and a twelve-year-old girl with shrapnel in her belly, her mother holding her hand and praying without stopping.',
          'Only one table is free. More than twenty others are waiting in the corridor; some have already stopped speaking.',
          'The nurse stands beside you, waiting for you to say something.'
        ]
      },
      choices: [
        { label: { en: 'Operate on the girl first', zh: '先给那个女孩做手术' }, next: 'triage-girl' },
        { label: { en: 'Operate on the officer first', zh: '先给那个军官做手术' }, next: 'triage-officer' }
      ]
    },

    'triage-girl': {
      chapter: { en: 'Chapter III', zh: '第三章' },
      text: {
        zh: [
          '你选了女孩。军官被推到走廊尽头，身上挂着最后一袋血浆。',
          '手术做了两个小时。弹片取出来的时候，天已经亮了。女孩醒过来，第一句话是要水喝。',
          '军官死在走廊上。早上六点，他的部下冲进医院，把你按在墙上，问是谁做的决定。',
          '“我。”你说。',
          '女孩的父亲从人群里挤过来，穿着第二共和国的军装，肩上有一道旧伤。他看了你一会儿，对那些人说：放开他。他救了我女儿。'
        ],
        en: [
          'You choose the girl. The officer is wheeled to the far end of the corridor with the last bag of plasma hanging over him.',
          'The operation takes two hours. By the time the shrapnel is out, it is light. The girl wakes and asks for water.',
          'The officer dies in the corridor. At six in the morning his men push into the hospital and pin you against the wall, demanding to know who made the decision.',
          '“I did,” you say.',
          'The girl’s father pushes through the crowd in the uniform of the Second Republic, an old wound on his shoulder. He looks at you for a moment, then tells them: let him go. He saved my daughter.'
        ]
      },
      choices: [
        { label: { en: 'Stay and keep watch through the night', zh: '留下来守夜' }, next: 'ward-night' },
        { label: { en: 'Run to the Red Crescent depot for blood', zh: '跑去红新月会仓库取血' }, next: 'blood-run' }
      ]
    },

    'triage-officer': {
      chapter: { en: 'Chapter III', zh: '第三章' },
      text: {
        zh: [
          '你选了军官。女孩被放在走廊的担架上，她母亲一直在叫你的名字，叫到没有声音。',
          '手术成功。军官醒来以后第一句话是：你叫什么名字。第二句是：你会得到回报的。',
          '三天后，第二共和国进城。他已经是上校，坐着吉普车回到医院，把你的名字写在一张纸上，盖了章。',
          '“通行证，”他说，“去海边，去埃及，去哪都行。或者留下——我们需要医生。”'
        ],
        en: [
          'You choose the officer. The girl is laid on a stretcher in the corridor; her mother keeps calling your name until she has no voice left.',
          'The operation succeeds. When the officer wakes, his first words are: what is your name. His second: you will be rewarded.',
          'Three days later the Second Republic enters the city. He is a colonel now, and he drives back to the hospital in a jeep, writes your name on a sheet of paper and stamps it.',
          '“A pass,” he says. “To the coast, to Egypt, anywhere you like. Or stay — we need doctors.”'
        ]
      },
      choices: [
        { label: { en: 'Take the pass and go west', zh: '收下通行证，往西走' }, next: 'pass-road' },
        { label: { en: 'Stay, and keep operating', zh: '留下，继续做手术' }, next: 'newdoc' }
      ]
    },

    /* ---- 救护车队支线 ---- */
    convoy: {
      chapter: { en: 'Chapter II', zh: '第二章' },
      text: {
        zh: [
          '红新月会的院子里停着四辆白色救护车，车顶画着红新月，车门上全是补过漆的弹孔。',
          '队长是个五十多岁的司机，叫阿布·哈桑。他递给你一件白大褂，说：能拉多少拉多少。',
          '车上装了十一个伤员，其中三个是孩子。出城的路被炮火封了一半：往西是拉塔基亚，西方势力和北约控制的海岸；往东北是代尔祖尔，苏联和社会主义者的地盘。',
          '“医生，”阿布·哈桑握着方向盘问你，“往哪走？”'
        ],
        en: [
          'Four white ambulances stand in the courtyard of the Red Crescent, a red crescent on each roof, every door patched over bullet holes.',
          'The driver is a man in his fifties called Abu Hassan. He hands you a white coat and says: we take as many as we can.',
          'Eleven wounded are loaded, three of them children. Half the road out of the city is under shellfire: west lies Latakia, the coast held by the Western powers and NATO; north-east lies Deir ez-Zor, the ground of the Soviets and the socialists.',
          '“Doctor,” Abu Hassan says, hands on the wheel, “which way?”'
        ]
      },
      choices: [
        { label: { en: 'West, to Latakia', zh: '往西，去拉塔基亚' }, next: 'coast-road' },
        { label: { en: 'North-east, to Deir ez-Zor', zh: '往东北，去代尔祖尔' }, next: 'deir-road' }
      ]
    },

    /* ---- 家人支线 ---- */
    family: {
      chapter: { en: 'Chapter II', zh: '第二章' },
      text: {
        zh: [
          '你家在旧城，一条窄巷的尽头，门口有一棵老橄榄树。母亲在院子里收杏干，妹妹在收拾一只旧箱子。',
          '“走？”母亲说，“你父亲埋在这棵树下，你哥哥的名字刻在广场的碑上。我走了，谁给他们浇水？”',
          '妹妹把箱子扣上，看着你。街上有人在喊，说第二共和国已经过了东门。',
          '西海岸是北约的，哈萨坎是库尔德人的，大马士革马上要换旗。这个家里，现在只有你还能做决定。'
        ],
        en: [
          'Your home is in the old city, at the end of a narrow lane, with an old olive tree by the door. Your mother is gathering up the drying apricots; your sister is packing an old suitcase.',
          '“Leave?” your mother says. “Your father is buried under this tree, and your brother’s name is cut into the stone in the square. If I go, who will water them?”',
          'Your sister snaps the case shut and looks at you. In the street someone is shouting that the Second Republic has passed the East Gate.',
          'The western coast is NATO’s, Hasakah is Kurdish, and Damascus is about to change flags. In this family, you are the only one left who can decide.'
        ]
      },
      choices: [
        { label: { en: 'Take them north-east, to Hasakah', zh: '带她们往东北去哈萨坎' }, next: 'ending-hasakah' },
        { label: { en: 'Stay, the whole family stays', zh: '全家留下，哪儿也不去' }, next: 'ending-stay' },
        { label: { en: 'Put them on a truck west, and go back to the hospital', zh: '把她们送上往西的车，自己回医院' }, next: 'ending-return' }
      ]
    },

    /* ---- 医院支线：第三章之后 ---- */
    'ward-night': {
      chapter: { en: 'Chapter IV', zh: '第四章' },
      text: {
        zh: [
          '那天夜里你没有回家。走廊的灯坏了一半，你借着手术灯剩下的光，一个一个看过去。',
          '四十七个人，能做的你都做了。有人握着你的手说谢谢，有人什么也没说。女孩睡在二号床，她母亲把毯子分了一半给旁边的老太太。',
          '凌晨，护士端来一杯很浓的咖啡，说：医生，你的手在抖。你看了一眼自己的手，说：我知道。',
          '天亮的时候，第一批第二共和国的士兵进了城。女孩的父亲站在医院门口，穿着那身军装，没有拿枪。他对你说：走吧，我送你回去睡一觉。',
          '你没有走。你在值班室的长凳上睡了三个小时，醒来接着做下一台。'
        ],
        en: [
          'You do not go home that night. Half the corridor lights are out, and you work by what is left of the operating lamp, patient by patient.',
          'Forty-seven people; you have done what could be done. Some take your hand and thank you; some say nothing. The girl sleeps in bed two, and her mother has given half her blanket to the old woman in the next bed.',
          'Towards dawn the nurse brings you a cup of very strong coffee and says: doctor, your hands are shaking. You look at them and say: I know.',
          'At first light the first soldiers of the Second Republic enter the city. The girl’s father stands at the hospital door in uniform, without a rifle. He says: come, I will walk you home to sleep.',
          'You do not go. You sleep three hours on a bench in the duty room, and then you start the next one.'
        ]
      },
      ending: { en: 'Twelve', zh: '十二岁' }
    },

    'blood-run': {
      chapter: { en: 'Chapter IV', zh: '第四章' },
      text: {
        zh: [
          '医院的血只剩三袋。你抓起外套往红新月会的仓库跑——三个街区，中间要穿过一段没有墙的街。',
          '仓库的门开着，里面有人在搬东西。四辆白色救护车停着，车顶的红新月掉了漆。司机阿布·哈桑看见你，说：我们要走了，往西。',
          '你说明来意。他从车上搬下两箱血浆塞给你，然后又看了一眼外面的炮火，说：上来吧，医生。这座城里已经没有医院了。',
          '两箱血抱在你怀里，车上还剩三个空位。'
        ],
        en: [
          'The hospital has three bags of blood left. You grab your coat and run for the Red Crescent depot — three blocks, one of them across a stretch of street with no walls left.',
          'The depot gate stands open and men are loading it. Four white ambulances wait, the red crescents on their roofs chipped. The driver, Abu Hassan, sees you and says: we are leaving. West.',
          'You explain what you came for. He lifts two crates of plasma down and pushes them into your arms, then glances at the shellfire outside. Get in, doctor, he says. There is no hospital left in this city.',
          'Two crates of blood in your arms, three empty seats in the ambulance.'
        ]
      },
      choices: [
        { label: { en: 'Carry the blood back to the hospital', zh: '抱着血浆跑回医院' }, next: 'ending-12' },
        { label: { en: 'Get in, and go west with them', zh: '上车，跟他们往西走' }, next: 'ending-coast' }
      ]
    },

    'pass-road': {
      chapter: { en: 'Chapter IV', zh: '第四章' },
      text: {
        zh: [
          '你收下了通行证。出城的路比你想的长：六个检查站，每一个都排着队，每一个都有人被从队伍里拉出去带走。',
          '第三个检查站，一个抱着孩子的女人被拦下，她的纸上没有章。她看见你口袋里的那张纸，一直看着你。',
          '你把通行证递给士兵，说：她跟我一起。士兵看了看那张纸，又看了看你，挥手放行。',
          '孩子在她怀里睡着了。你想起走廊上那个十二岁的女孩，想起她母亲叫你的名字，一直叫到没有声音。'
        ],
        en: [
          'You take the pass. The road out of the city is longer than you expected: six checkpoints, a queue at each, and at each one somebody is pulled out of the line and taken away.',
          'At the third checkpoint a woman carrying a child is stopped; her paper has no stamp. She sees the sheet in your pocket and does not look away.',
          'You hand the pass to the soldier and say: she is with me. He looks at the paper, then at you, and waves you both through.',
          'The child is asleep in her arms. You think of the girl in the corridor, and of her mother calling your name until she had no voice left.'
        ]
      },
      choices: [
        { label: { en: 'Keep going west, to Latakia', zh: '继续往西，去拉塔基亚' }, next: 'ending-pass' },
        { label: { en: 'Turn the car around, back to Damascus', zh: '掉头回大马士革' }, next: 'ending-newdoc' }
      ]
    },

    'newdoc': {
      chapter: { en: 'Chapter IV', zh: '第四章' },
      text: {
        zh: [
          '你留下了。新共和国的卫生部接管医院，换掉墙上的总统像，别的什么都没有变。',
          '上校来了一趟，把一份任命书放在你桌上：军医处副主管，配车，配房。他说：签吧，这是你应得的。',
          '你看了一眼任命书，又看了一眼走廊——那里躺着四十七个人，和三个月前一模一样。'
        ],
        en: [
          'You stay. The new republic’s ministry of health takes over the hospital, takes down the President’s portrait, and changes nothing else.',
          'The colonel comes by and lays a letter of appointment on your desk: deputy head of the medical corps, a car, a flat. Sign it, he says. You have earned it.',
          'You look at the letter, then at the corridor — forty-seven people lying there, exactly as three months ago.'
        ]
      },
      choices: [
        { label: { en: 'Sign the appointment', zh: '签下任命书' }, next: 'ending-newdoc' },
        { label: { en: 'Push it back and stay an ordinary doctor', zh: '把任命书推回去，只做普通医生' }, next: 'ending-anon' }
      ]
    },

    /* ---- 救护车队支线：路上的抉择 ---- */
    'coast-road': {
      chapter: { en: 'Chapter III', zh: '第三章' },
      text: {
        zh: [
          '出城三十公里，第一个村子在烧。路边有人挥手：一个男人抱着腿上流血的孩子，后面还跟着七八个人。',
          '车上已经满了，十一个伤员，三个孩子。阿布·哈桑看着后视镜，没有说话。',
          '炮声从村子后面传过来，很近，近得能听见墙塌下去的声音。'
        ],
        en: [
          'Thirty kilometres out of the city, the first village is burning. People wave from the roadside: a man carrying a child with a bleeding leg, seven or eight more behind him.',
          'The ambulance is full — eleven wounded, three of them children. Abu Hassan watches the mirror and says nothing.',
          'The shelling comes from behind the village, very close, close enough to hear the walls coming down.'
        ]
      },
      choices: [
        { label: { en: 'Stop, and take as many as will fit', zh: '停车，能塞的都塞上来' }, next: 'ending-village' },
        { label: { en: 'Do not stop — get the wounded to the coast first', zh: '不停车，先把车上的伤员送到海边' }, next: 'ending-coast' }
      ]
    },

    'deir-road': {
      chapter: { en: 'Chapter III', zh: '第三章' },
      text: {
        zh: [
          '往东北的路穿过沙漠。第三天傍晚，幼发拉底河出现了，河边是代尔祖尔低矮的平房。',
          '城里到处是军车和苏联顾问。医院是一所改成病房的学校，走廊上挂着社会主义者的旗。',
          '一个苏联女医生带你看了药房：成箱的青霉素，箱子上印着俄文。她说：这里缺人。',
          '同一天，前线传来消息：哈萨坎方向要打起来了，需要医疗队。'
        ],
        en: [
          'The road north-east runs through desert. Towards evening on the third day the Euphrates appears, and the low flat roofs of Deir ez-Zor along its bank.',
          'Army trucks and Soviet advisers are everywhere. The hospital is a school turned into wards, socialist flags hanging along the corridors.',
          'A Soviet woman doctor shows you the pharmacy: crates of penicillin stencilled in Russian. We are short of people here, she says.',
          'That same day word comes from the front: fighting is expected towards Hasakah, and a medical team is needed.'
        ]
      },
      choices: [
        { label: { en: 'Stay at the hospital in Deir ez-Zor', zh: '留在代尔祖尔的医院' }, next: 'ending-deir' },
        { label: { en: 'Volunteer for the front', zh: '报名去前线' }, next: 'ending-front' }
      ]
    },

    /* ---- 结局 ---- */
    'ending-12': {
      chapter: null,
      text: {
        zh: [
          '你选了女孩。军官被推到走廊尽头，身上挂着最后一袋血浆。',
          '手术做了两个小时。弹片取出来的时候，天已经亮了。女孩醒过来，第一句话是要水喝。',
          '军官死在走廊上。早上六点，他的部下冲进医院，把你按在墙上，问是谁做的决定。',
          '“我。”你说。',
          '女孩的父亲从人群里挤过来，穿着第二共和国的军装，肩上有一道旧伤。他看了你一会儿，对那些人说：放开他。他救了我女儿。',
          '那年冬天，女孩出院的时候，她母亲把一枚小小的银挂坠塞进你手里，说这是她母亲留给她的。你没有收，她就一直攥在你的口袋里，直到你自己发现。'
        ],
        en: [
          'You choose the girl. The officer is wheeled to the far end of the corridor with the last bag of plasma hanging over him.',
          'The operation takes two hours. By the time the shrapnel is out, it is light. The girl wakes and asks for water.',
          'The officer dies in the corridor. At six in the morning his men push into the hospital and pin you against the wall, demanding to know who made the decision.',
          '“I did,” you say.',
          'The girl’s father pushes through the crowd in the uniform of the Second Republic, an old wound on his shoulder. He looks at you for a moment, then tells them: let him go. He saved my daughter.',
          'That winter, when the girl went home, her mother pressed a small silver pendant into your hand and said it had been her own mother’s. You tried to refuse, but it stayed in your pocket until you found it there yourself.'
        ]
      },
      ending: { en: 'Twelve', zh: '十二岁' }
    },

    'ending-anon': {
      chapter: null,
      text: {
        zh: [
          '你把任命书推回去，说：我只是个医生。上校看了你很久，把纸收起来，什么也没说。',
          '你继续在走廊上做手术。工资没涨，房子没分，车也没有。有人替你可惜，你说：我够了。',
          '后来医院来了很多新医生，都很年轻，都叫你老师。他们不知道你曾经可以当上副主管。',
          '很多年后，一个护士整理旧档案，翻出一张 1979 年的手术记录：四十七个人，一个签名，没有军衔。'
        ],
        en: [
          'You push the letter back and say: I am only a doctor. The colonel looks at you for a long moment, folds the paper away and says nothing.',
          'You go on operating in the corridors. No raise, no flat, no car. People tell you it is a pity. You say: I have enough.',
          'In time many new doctors come to the hospital, all of them young, all of them calling you teacher. They do not know you could once have been deputy head.',
          'Many years later a nurse sorting old files finds an operating record from 1979: forty-seven patients, one signature, no rank.'
        ]
      },
      ending: { en: 'The Doctor Without a Name', zh: '无名的医生' }
    },

    'ending-village': {
      chapter: null,
      text: {
        zh: [
          '你让阿布·哈桑停车。八个人挤了上来，最后一个只能挂在车门外。',
          '村子里还有十几个人，你们装不下了。一个老人挥挥手，说：走吧，别停。',
          '开出两公里，炮火把村子盖住了。车上没有人说话。你怀里那个腿上流血的孩子，一直睁着眼睛看你。',
          '到了拉塔基亚，三个孩子活下来两个。你后来常想：如果那天没有停车，会不会多救两个；如果没有停车，会不会一辈子记得那十几个人。'
        ],
        en: [
          'You tell Abu Hassan to stop. Eight people squeeze in; the last one has to hang on outside the door.',
          'A dozen more are still in the village and there is no room. An old man waves his hand and says: go. Do not stop.',
          'Two kilometres on, the shelling covers the village. Nobody in the ambulance speaks. The child with the bleeding leg lies in your arms with his eyes open, watching you.',
          'At Latakia, two of the three children live. Afterwards you often wonder: if you had not stopped, would you have saved two more? And if you had not stopped, would you have remembered those dozen people for the rest of your life?'
        ]
      },
      ending: { en: 'The Village', zh: '村子' }
    },

    'ending-front': {
      chapter: null,
      text: {
        zh: [
          '你报了名。第二天一早，一辆卡车把你和两箱药品送到哈萨坎方向的野战医院——一顶帐篷，三张行军床。',
          '前线比城里更忙。伤员用皮卡一车一车拉来，有时候一天八十个。你做的手术比在大马士革一年还多。',
          '苏联顾问偶尔来，库尔德人的指挥官也来。他们互相不说话，但都要你救人。你救了。',
          '一年后，战线往南移了。你收帐篷的时候，发现下面长出了一丛草。'
        ],
        en: [
          'You volunteer. At dawn the next day a truck takes you and two crates of medicine to a field hospital towards Hasakah — one tent, three camp beds.',
          'The front is busier than the city ever was. The wounded come in by the pickup-load, eighty in a day sometimes. You do more surgery here than in a whole year in Damascus.',
          'Soviet advisers come by now and then, and Kurdish commanders too. They do not speak to each other, but both want you to save lives. You do.',
          'A year later the line moves south. When you strike the tent, you find a patch of grass growing underneath it.'
        ]
      },
      ending: { en: 'The Tent at the Front', zh: '前线的帐篷' }
    },

    'ending-pass': {
      chapter: null,
      text: {
        zh: [
          '你把通行证折好，放进上衣口袋，贴着心脏。',
          '出城的路有六个检查站，每一个都看那张盖了章的纸，然后挥手放行。',
          '第十天，你到了拉塔基亚。港口停着法国和美国的军舰，白色帐篷一直排到沙滩尽头，有人在发面包和毯子。',
          '你回头看了一眼东边。你想起那个女孩的母亲，想起她叫你的名字，一直叫到没有声音。',
          '那张通行证你留了一辈子。它救了你，也每一天都在提醒你：你是踩着谁的命走出来的。'
        ],
        en: [
          'You fold the pass and put it in your breast pocket, against your heart.',
          'There are six checkpoints on the road out. Each one looks at the stamped paper, then waves you through.',
          'On the tenth day you reach Latakia. French and American warships lie in the harbour; white tents run to the end of the beach; someone is handing out bread and blankets.',
          'You look back east. You think of the girl’s mother, calling your name until she had no voice left.',
          'You keep that pass all your life. It saved you, and every day it reminded you whose life you walked out on.'
        ]
      },
      ending: { en: 'The Pass', zh: '通行证' }
    },

    'ending-newdoc': {
      chapter: null,
      text: {
        zh: [
          '你留下来了。新共和国的卫生部接管了医院，换掉墙上的总统像，别的什么都没有变。',
          '伤员还是那么多，血还是不够，缝合线还是要拆开煮沸再用。只是军装的颜色换了，臂章换了，广播里念的名字换了。',
          '上校偶尔会来，站在手术室门口看你一会儿，什么也不说。有一次他问：你后悔吗？',
          '你没有回答。你正在缝一个十九岁士兵的肚子——他穿着绿白黑的军装，伤口的位置，和三个月前你救过的那个人一模一样。'
        ],
        en: [
          'You stay. The new republic’s ministry of health takes over the hospital, takes down the President’s portrait, and changes nothing else.',
          'There are just as many wounded, just as little blood, and the sutures still have to be unpicked and boiled. Only the colour of the uniforms has changed, and the armbands, and the names read out on the radio.',
          'The colonel comes by now and then, stands in the theatre doorway and watches you for a while without speaking. Once he asks: do you regret it?',
          'You do not answer. You are stitching the belly of a nineteen-year-old soldier — green, white and black on his sleeve, the wound in exactly the same place as the man you saved three months ago.'
        ]
      },
      ending: { en: 'The Doctor of the New Republic', zh: '新共和国的医生' }
    },

    'ending-coast': {
      chapter: null,
      text: {
        zh: [
          '你们走了十一个小时。路上停了七次，每次都是把伤员从一辆车抬到另一辆车上。',
          '到拉塔基亚那天，正好赶上北约的第二批登陆。海面上排着灰色的军舰，法国的三色旗和美国的星条旗并排挂着，登陆艇一艘接一艘冲上沙滩。',
          '一个法国军医接手了你的伤员，看了看你的手，用法语说了句什么；旁边的翻译说：他说你的缝合做得很好。',
          '阿布·哈桑靠在车门上抽烟，看着海。他说：我开了三十年车，第一次开到海这边来。',
          '后来你们都被登记为难民。你在一顶帐篷里继续看病，用的是一把借来的剪刀和一卷绷带。'
        ],
        en: [
          'You drive for eleven hours. Seven times you stop, each time to lift the wounded from one vehicle into another.',
          'You reach Latakia on the day the second wave of NATO lands. Grey warships line the horizon, the French tricolour and the American stars and stripes hanging side by side, landing craft racing one after another onto the sand.',
          'A French military doctor takes over your patients, looks at your hands and says something in French; the interpreter beside him says: he says your sutures are very good.',
          'Abu Hassan leans on the ambulance door, smoking, looking at the sea. He says: thirty years I have been driving, and this is the first time I have driven to this side of the water.',
          'In the end you are all registered as refugees. You go on treating people in a tent, with a borrowed pair of scissors and one roll of bandage.'
        ]
      },
      ending: { en: 'The White Convoy', zh: '白色车队' }
    },

    'ending-deir': {
      chapter: null,
      text: {
        zh: [
          '你们往东北走，穿过沙漠。第三天傍晚，前面出现了幼发拉底河，和一片低矮的平房。',
          '代尔祖尔已经是一座军营。苏联顾问在路口检查证件，社会主义者的旗子挂在电线杆上，喇叭里放着阿拉伯语的战报。',
          '这里的医院比大马士革的还简陋，但药是有的——成箱的青霉素，箱子上印着俄文。一个苏联女医生教你怎么用新的止血钳。',
          '你留了下来，一留就是很多年。你给社会主义者的士兵做手术，也给库尔德人的孩子做手术——只要抬进来，你就做。',
          '有些夜里，河面上起雾，你会想起大马士革的橄榄树，想起母亲晒在院子里的杏干。然后天亮了，走廊上又开始排队。'
        ],
        en: [
          'You drive north-east, across the desert. Towards evening on the third day the Euphrates appears ahead, and a cluster of low flat-roofed houses.',
          'Deir ez-Zor is already an army camp. Soviet advisers check papers at the crossroads, socialist flags hang from the telegraph poles, and the loudspeakers broadcast communiqués in Arabic.',
          'The hospital here is cruder than the one in Damascus, but there are medicines — crates of penicillin stencilled in Russian. A Soviet woman doctor teaches you to use a new type of artery clamp.',
          'You stay, and stay for many years. You operate on socialist soldiers, and on Kurdish children too — whoever is carried in, you take.',
          'On some nights mist rises off the river, and you think of the olive trees of Damascus, of the apricots drying in your mother’s courtyard. Then the sky lightens, and the corridor begins to fill again.'
        ]
      },
      ending: { en: 'The Hospital on the Euphrates', zh: '幼发拉底河边的医院' }
    },

    'ending-hasakah': {
      chapter: { en: 'Chapter III', zh: '第三章' },
      text: {
        zh: [
          '你们往东北走，穿过沙漠，第七天到了哈萨坎。路口立着库尔德人的检查站，旗子是黄红绿三色，中间一个太阳。',
          '检查站的指挥官看了看你的手——外科医生的手，指节上有碘酒染的黄。他说：这里缺医生。',
          '母亲在营地门口插了一小枝橄榄，插在罐头瓶里。她说：活不活不知道，先种着。',
          '你在营地的诊所工作，每天看一百多个人。妹妹学会了库尔德语，学会了包扎，后来成了你的助手。',
          '那年冬天，第一批从大马士革逃出来的人到了营地。你一个一个问他们：旧城还在吗？没有人回答得上来。',
          '山那边是伊拉克，山这边是一个还没有名字的国家。在这里，你第一次觉得自己不是下了班才活着。'
        ],
        en: [
          'You travel north-east, across the desert, and on the seventh day reach Hasakah. A Kurdish checkpoint stands at the crossroads, its flag yellow, red and green with a sun at the centre.',
          'The commander looks at your hands — a surgeon’s hands, the knuckles stained yellow with iodine. He says: we are short of doctors here.',
          'At the gate of the camp your mother plants a small olive cutting in a tin can. Whether it lives or not, she says, we plant it.',
          'You work in the camp clinic and see more than a hundred people a day. Your sister learns Kurdish, learns to dress wounds, and in time becomes your assistant.',
          'That winter the first families from Damascus reach the camp. You ask each of them: is the old city still there? Not one can answer.',
          'Beyond the mountains is Iraq; on this side is a country that does not yet have a name. Here, for the first time, you feel you are not merely alive between shifts.'
        ]
      },
      ending: { en: 'The Border Beyond the Mountains', zh: '山那边的边界' }
    },

    'ending-stay': {
      chapter: { en: 'Chapter III', zh: '第三章' },
      text: {
        zh: [
          '你们没有走。你把门闩上，坐在橄榄树下，听街上的枪声一点一点变稀。',
          '第三天早上，巷口挂起了绿白黑三色的旗。广场上在烧东西：旧国徽、总统像，还有从政府大楼里搬出来的文件。',
          '医院来通知你去上班。你去了。换了一个卫生部，换了一面旗，走廊上的伤员还是那么多。',
          '母亲照旧晒杏干，妹妹照旧缝衣服。有人问她：你哥哥呢？她说：他在医院。',
          '那一年橄榄树结了很多果子。母亲说：树不知道城换了主人。',
          '很多年后，你还在那家医院。你救过的人里，有旧政权的，有新共和国的，有库尔德人，有从海那边回来的。你从不问他们是谁。'
        ],
        en: [
          'You do not go. You bolt the door and sit under the olive tree, listening as the gunfire in the streets grows thinner and thinner.',
          'On the third morning the green, white and black flag goes up at the mouth of the lane. In the square they are burning things: the old coat of arms, the President’s portrait, the files carried out of the government buildings.',
          'The hospital sends word that you are to report for duty. You go. There is a new ministry, a new flag, and the same crowded corridors.',
          'Your mother dries apricots as before; your sister sews as before. Someone asks her: where is your brother? She says: he is at the hospital.',
          'The olive tree bore a great deal of fruit that year. Your mother said: the tree does not know the city has changed masters.',
          'Many years later you are still there. Among the people you have saved are men of the old regime, of the new republic, Kurds, and people who came back from the sea. You never ask who they are.'
        ]
      },
      ending: { en: 'The City with a New Flag', zh: '换了旗帜的城市' }
    },

    'ending-return': {
      chapter: { en: 'Chapter III', zh: '第三章' },
      text: {
        zh: [
          '你把母亲和妹妹送上一辆往西的卡车，塞给司机两盒青霉素和一个地址。母亲没有哭，只说：你别死。',
          '你回到医院，脱下外套，洗手，进手术室。那天走廊上有四十七个人。',
          '三天后城破。第二共和国的士兵冲进医院的时候，你正在缝最后一个伤员。他们看了看你的白大褂，没有开枪。',
          '后来有人问你为什么不走。你说：我是医生。我走了，谁给他们缝？',
          '母亲和妹妹到了拉塔基亚。两年后托人带来一封信，信里夹着一张照片：她们站在白色的帐篷前面，妹妹长高了。',
          '信的最后一句是母亲写的：等仗打完，我们就回来。你把信折好放进口袋，那天晚上做了两台手术。'
        ],
        en: [
          'You put your mother and sister on a truck heading west, press two boxes of penicillin and an address into the driver’s hands. Your mother does not cry. She says only: do not die.',
          'You go back to the hospital, take off your coat, wash your hands, and walk into the theatre. There are forty-seven people in the corridor that day.',
          'Three days later the city falls. When the soldiers of the Second Republic push into the hospital you are stitching the last patient. They look at your white coat and do not fire.',
          'Later someone asks why you did not leave. You say: I am a doctor. If I go, who stitches them?',
          'Your mother and sister reach Latakia. Two years later a letter arrives by hand with a photograph inside: the two of them in front of the white tents, your sister taller.',
          'At the end of the letter your mother has written: when the war is over, we will come back. You fold it into your pocket, and that night you operate on two patients.'
        ]
      },
      ending: { en: 'The One Who Stayed', zh: '留下的人' }
    }
  }
};

window.STORY_UI = {
  en: { restart: 'Start over', ending: 'Ending' },
  zh: { restart: '重新开始', ending: '结局' }
};

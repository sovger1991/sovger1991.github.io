/* Republic of Gerald Wu — interactive story engine
   剧本：《漆黑的夜》全本加长版（5 种结局）
   呈现：点选后旧情节保留，所选选项以正文格式并入叙事，新场景追加在下方。
   剧本结构：scenes 含 chapter / text / choices / ending 标记。 */
(() => {
  const root = document.querySelector('[data-story-game]');
  if (!root) return;

  const screenEl = root.querySelector('[data-story-screen]');
  const choicesEl = root.querySelector('[data-story-choices]');

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const STORY = {
    start: 'start',
    scenes: {
      start: {
        chapter: { en: 'Chapter I', zh: '第一章' },
        text: {
          zh: [
            '…莫斯科，1978…',
            '你是中央制图局的一位小职员，刚刚被录取进入工作岗位。虽然报酬不多，但至少有钱吃饭了。你的母亲和妻子还在鄂木茨克老家等你挣了钱回来。',
            '在遥远的西伯利亚，只有荒废的核试验场和一望无际的平原。有时，运气好的时候，会看到矿工们的大型设施转运的奇观。这也是那个小城里唯一的娱乐方式了吧。',
            '你少尉哥哥战死在阿富汗后，你就是家庭中唯一的劳动力了。于是，你无奈的不舍的走进了鄂木茨克中央火车站，买了一张到莫斯科的车票。凭借你党员和英勇牺牲的哥哥的亲属的特殊身份，很快进入了公务员行业工作。',
            '今天上司给你派来的任务是整理阿富汗战争胜利之前的地图，新并入的加盟共和国北阿富汗苏维埃共和国又在伟大的联盟版图上添加了一块！'
          ],
          en: [
            '…Moscow, 1978…',
            'You are a junior clerk at the Central Cartography Directorate, newly hired. The pay is modest, but at least it puts food on the table. Your mother and your wife are back home in Omsk, waiting for you to send money.',
            'Out there in distant Siberia there is nothing but abandoned nuclear test sites and endless plains. Sometimes, on a lucky day, you can watch the spectacle of the miners’ giant machinery being hauled through town — probably the only entertainment that little city has.',
            'After your brother, a second lieutenant, fell in Afghanistan, you became the family’s only provider. So, reluctant and heavy-hearted, you walked into Omsk Central Station and bought a ticket to Moscow. Thanks to your Party membership and your status as the kin of a heroically fallen brother, you quickly entered the civil service.',
            'Today’s assignment from your supervisor: sort the maps from before the victory in the Afghan war. The newly incorporated North Afghanistan Soviet Republic has added yet another piece to the map of the great Union!'
          ]
        },
        choices: [
          { label: { en: 'Get to work.', zh: '干活。' }, next: 'work' },
          { label: { en: 'Look up at Chairman Brezhnev’s portrait', zh: '抬头看看勃列日涅夫主席的画像' }, next: 'portrait' },
          { label: { en: 'Dig through the files on the North Afghanistan Republic', zh: '翻找关于北阿富汗加盟共和国的资料' }, next: 'archives' }
        ]
      },

      /* ---- 干活支线 ---- */
      work: {
        chapter: { en: 'Chapter II', zh: '第二章' },
        text: {
          zh: [
            '一上午过后，终于到了午饭时间。幸好赫鲁晓夫时代过去了，要不然现在就该到饿肚子时间了。至少现在坐在克里姆林宫里的人可以让你吃上两块产自第聂伯河岸的面包和一小点来自爱沙尼亚的沙棘果酱。',
            '不是很好吃…不出意外，到了晚上，还是面包和果酱。'
          ],
          en: [
            'The morning passes, and lunchtime finally arrives. Thank goodness the Khrushchev era is over — otherwise this would be the going-hungry hour. At least the man sitting in the Kremlin these days lets you eat two pieces of bread from the banks of the Dnieper with a little sea-buckthorn jam from Estonia.',
            'Not exactly tasty… and barring surprises, supper will be bread and jam again.'
          ]
        },
        choices: [
          { label: { en: 'Behave yourself and go to sleep', zh: '老老实实睡觉去吧' }, next: 'routine' },
          { label: { en: 'Still hungry — look for something else to eat', zh: '还是饿肚子，找找有什么其他可以吃的' }, next: 'corridor' }
        ]
      },

      routine: {
        chapter: { en: 'Chapter III', zh: '第三章' },
        text: {
          zh: [
            '日子像复写纸一样，一张压着一张。',
            '早上七点半，你在筒子楼的公共厨房排队等炉子；八点半，在电车站排队等车；中午，在食堂排队等汤。你的票证夹里装着粮票、油票、糖票、布票，每个月月底都得再数一遍。',
            '商店橱窗里摆着一台“红宝石”牌黑白电视机，标价三百二十卢布。你站在橱窗前看了一会儿，算了算：不吃不喝，四个月。你转身去了邮局，把刚发的工资按老规矩分成两份，一份寄回鄂木茨克。'
          ],
          en: [
            'The days stack up like carbon copies, one pressed over the next.',
            'At seven-thirty you queue for the stove in the communal kitchen; at eight-thirty you queue for the tram; at noon you queue for soup in the canteen. Your coupon wallet holds ration stamps for grain, oil, sugar, cloth — at the end of every month you count them again.',
            'In the shop window sits a “Rubin” black-and-white television, priced at three hundred and twenty rubles. You stand before the window and do the arithmetic: four months, if you eat and drink nothing. You turn away and go to the post office, where you split your wage in two as always, and send one half home to Omsk.'
          ]
        },
        choices: [
          { label: { en: 'Write to your mother at night', zh: '夜里给母亲写信' }, next: 'ending-clerk' },
          { label: { en: 'Check the housing application one more time', zh: '把分房申请表再检查一遍' }, next: 'ending-clerk' }
        ]
      },

      'ending-clerk': {
        chapter: null,
        text: {
          zh: [
            '夜里你睡得很沉。面包和果酱在胃里安安静静地待着，像两块小小的石头。',
            '日子就这样过下去。你的工资是每月九十卢布：面包还便宜，一条黑麦面包十八戈比；但香肠要两块二一公斤，而且常常买不到；黄油要凭票。商店门口的队伍总是拐过街角。那台三百二十卢布的电视机，你最终没有买——你攒了两年，给母亲寄回去的是一台收音机。',
            '分房名单上，你排在第四百多位。你等了很多年，从筒子楼里的一间房，等到一套带厨房的小两居——那一年，你的儿子已经会背列宁的童年故事了。',
            '你偶尔还会想起北阿富汗苏维埃共和国。它一直在地图集的同一页上，安安静静，不再长大，也不再缩小。',
            '很多很多年后，你在同一个地下室里退休。欢送会上有一瓶格鲁吉亚红酒，每人分到一小杯。有人问你这辈子做了什么。你说：我把地图整理得很好。'
          ],
          en: [
            'That night you sleep deeply. The bread and jam sit quietly in your stomach, like two small stones.',
            'And so the days go on. Your wage is ninety rubles a month: bread is still cheap — a loaf of rye for eighteen kopecks — but sausage is two-twenty a kilo, and often cannot be had at all; butter comes by coupon. The shop queues always turn the corner of the street. The three-hundred-and-twenty-ruble television you never do buy — after two years of saving, what you send your mother is a radio.',
            'On the housing list you are somewhere in the four-hundreds. You wait years — from one room in a communal flat to a small two-room apartment with its own kitchen — and by then your son can already recite the childhood stories of Lenin.',
            'Occasionally you still think of the North Afghanistan Soviet Republic. It stays on the same page of the atlas, quiet, neither growing nor shrinking.',
            'Many, many years later you retire in the same basement. At the farewell party there is a bottle of Georgian red, one small glass each. Someone asks what you did with your life. You say: I kept the maps in good order.'
          ]
        },
        ending: { en: 'The Ordinary Man', zh: '普通人' }
      },

      corridor: {
        chapter: { en: 'Chapter III', zh: '第三章' },
        text: {
          zh: [
            '你翻了翻茶水间：半罐盐，一块硬得能敲出声音的方糖，别人的搪瓷缸子。走廊那头，不知道什么时候飘过来一丝甜味。',
            '是橘子。你循着味道走了十几步，停在上司办公室门口。门没有锁严——桌上放着一小筐橘子，格鲁吉亚来的特供，是发给领导的。这种东西，商店里一年只在元旦前见得到一次，而且每人限量一公斤。',
            '你听见自己的肚子，在空荡荡的走廊里叫了一声。'
          ],
          en: [
            'You rummage through the tea room: half a jar of salt, a sugar cube hard enough to knock on, other people’s enamel mugs. From down the corridor comes a faint sweetness.',
            'Mandarins. You follow the smell a dozen steps and stop at your supervisor’s door. It is not quite shut — on the desk sits a small crate of mandarins, a special ration from Georgia, issued to the leadership. In the shops such things appear once a year, just before New Year’s Day, one kilo per person.',
            'Your stomach growls once, loudly, in the empty corridor.'
          ]
        },
        choices: [
          { label: { en: 'Push the door open', zh: '推门进去' }, next: 'fruit' },
          { label: { en: 'Hold back and go to sleep', zh: '忍住，回去睡觉' }, next: 'ending-clerk' }
        ]
      },

      fruit: {
        chapter: { en: 'Chapter IV', zh: '第四章' },
        text: {
          zh: [
            '屋里很暗，窗帘缝里漏进来一线路灯的光。你踮着脚走到桌前，橘子的甜味更近了。',
            '走廊尽头，巡逻警卫的手电光晃了一下。'
          ],
          en: [
            'The room is dark; a blade of streetlight slips between the curtains. On tiptoe you cross to the desk — the sweetness is close now.',
            'At the far end of the corridor, the patrol guard’s flashlight swings past.'
          ]
        },
        choices: [
          { label: { en: 'Grab two and go', zh: '抓两个就走' }, next: 'ending-caught' },
          { label: { en: 'Slip back into the dark and wait for the change of guard', zh: '退到暗处，等警卫换岗' }, next: 'ending-free' }
        ]
      },

      'ending-caught': {
        chapter: null,
        text: {
          zh: [
            '你的手刚碰到橘子，手电光就打在了你的脸上。',
            '“站住！干什么的？”',
            '后面的事情像盖章一样快：笔录、检讨、宣布处分——偷窃社会主义财产罪。党籍没了，公职没了，干部登记表上永远多了一行字。',
            '回鄂木茨克的火车上，你把脸贴在冰凉的车窗上。你想不明白：两个橘子，怎么就把一辈子压垮了。'
          ],
          en: [
            'Your fingers have barely touched a mandarin when the flashlight lands on your face.',
            '"Stop! What are you doing there?"',
            'What follows moves like a rubber stamp: the report, the self-criticism, the sentence — theft of socialist property. The Party card is gone. The job is gone. Your personnel file will carry one extra line forever.',
            'On the train back to Omsk you press your face to the cold window. You cannot work it out: how did two mandarins crush a whole life?'
          ]
        },
        ending: { en: 'The Thief', zh: '小偷' }
      },

      'ending-free': {
        chapter: null,
        text: {
          zh: [
            '你屏住呼吸，退进档案柜的阴影里，等警卫的脚步声走远，再等交接班的铃声响过两遍。',
            '三点钟，你闪进办公室，拿了两个橘子——只拿两个。橘皮被你埋进院子里的雪堆，人钻进值班室的被窝，在黑暗里一瓣一瓣地吃。',
            '那是你来莫斯科以后吃过的最甜的东西。很多年后，每当元旦的橘子摆上商店柜台，你都会想起这个夜晚。',
            '你的一生没有因此改变：你照样整理地图，照样排队，照样等着分房。但至少，这个夜晚是你的。'
          ],
          en: [
            'You hold your breath and retreat into the shadow of the filing cabinets. You wait for the footsteps to fade, then for the change-of-watch bell to ring twice.',
            'At three o’clock you slip into the office and take two mandarins — only two. You bury the peel in the snowdrift in the courtyard, crawl under the duty-room blanket, and eat them segment by segment in the dark.',
            'It is the sweetest thing you have eaten since coming to Moscow. Years later, whenever the New Year mandarins appear on the shop counters, you remember this night.',
            'Your life does not change because of it: you still sort maps, still stand in queues, still wait for housing. But at least this night is yours.'
          ]
        },
        ending: { en: 'Something Sweet', zh: '甜的' }
      },

      /* ---- 画像支线 ---- */
      portrait: {
        chapter: { en: 'Chapter II', zh: '第二章' },
        text: {
          zh: [
            '勃列日涅夫主席带领着国家进入了黄金时代。人们总说，敬爱的勃列日涅夫主席，我们最爱您！你没感觉到他有什么好的。',
            '发动阿富汗战争的蠢家伙！你心里暗自骂道，让我的哥哥就这样牺牲了。你在这个堆满地图的房间里，看了看门外确认没有人后，指着勃列日涅夫的鼻子骂道：你把我哥还我！发动战争的畜生！',
            '突然，敲门声打断了你的泄愤。'
          ],
          en: [
            'Chairman Brezhnev has led the country into a golden age. People always say: beloved Chairman Brezhnev, we love you most of all! You have never felt there was anything good about him.',
            'The fool who started the Afghan war! you curse in your heart — he got my brother killed. In this room stacked with maps, you glance at the door to make sure nobody is there, then point at Brezhnev’s nose and curse aloud: Give me back my brother! You war-making animal!',
            'Suddenly, a knock at the door cuts your outburst short.'
          ]
        },
        choices: [
          { label: { en: 'Open the door', zh: '开门' }, next: 'arrest-open' },
          { label: { en: 'Don’t open the door', zh: '不开门' }, next: 'arrest-shut' }
        ]
      },

      'arrest-open': {
        chapter: { en: 'Chapter III', zh: '第三章' },
        text: {
          zh: [
            '你开了门。门外站着两个人，灰色大衣，灰色面孔。',
            '“公民，”年长的一个客气地说，“跟我们走一趟。”他的同伴已经走进来，把你的抽屉一个一个拉开看了一眼，然后“砰”地合上。你的笔记本被装进了他的公文包。',
            '楼下的院子里停着一辆黑色伏尔加。你坐在后排中间，左右各一件灰色大衣。车子驶过空无一人的广场，你知道它要去哪里。'
          ],
          en: [
            'You open the door. Outside stand two men — grey coats, grey faces.',
            '"Citizen," the elder says politely, "come with us." His companion is already inside, pulling your drawers open one by one, glancing in, and shutting them with a bang. Your notebook goes into his briefcase.',
            'A black Volga waits in the courtyard below. You sit in the middle of the back seat, a grey coat on either side. The car crosses the empty square, and you know where it is going.'
          ]
        },
        choices: [
          { label: { en: 'Ask on what grounds they are arresting you', zh: '问他们凭什么抓人' }, next: 'verdict-open' },
          { label: { en: 'Say nothing', zh: '一言不发' }, next: 'verdict-open' }
        ]
      },

      'verdict-open': {
        chapter: null,
        text: {
          zh: [
            '没有人回答你。在卢比扬卡的地下室里，你第一次听到自己骂勃列日涅夫的原话——他们一字不差地复述出来，连“畜生”两个字都在。原来这间办公室的墙，一直有耳朵。',
            '审讯进行了两个星期。你签的每一页笔录，他们都用回形针别好，码得整整齐齐，像你整理过的地图。',
            '判决书很短：刑法第七十条，反苏宣传煽动罪，劳动改造营七年，流放五年。母亲从鄂木茨克发来一封电报，只有一句话：孩子，妈妈等你。'
          ],
          en: [
            'Nobody answers you. In the basement of the Lubyanka you hear your own curses at Brezhnev for the first time — repeated back to you word for word, even the word "animal". It turns out the walls of that office have always had ears.',
            'The interrogation lasts two weeks. Every page of transcript you sign is paper-clipped and stacked as neatly as the maps you used to sort.',
            'The sentence is short: Article 70 of the Criminal Code — anti-Soviet agitation and propaganda. Seven years of labor camp, five years of exile. From Omsk your mother sends a telegram of one line: Child, Mother will wait for you.'
          ]
        },
        ending: { en: 'Article 70', zh: '第七十条' }
      },

      'arrest-shut': {
        chapter: { en: 'Chapter III', zh: '第三章' },
        text: {
          zh: [
            '你屏住呼吸，一动不动。门外安静了几秒，然后锁舌“咔嚓”一声断裂，门板撞在墙上。',
            '两个人把你从椅子上拎起来，按在地图上。你的脸贴着冰凉的桌面，鼻尖正对着北阿富汗苏维埃共和国那一页。',
            '“装没听见？”一个声音在你耳边说，“你在屋里骂了整整四分钟。我们都听见了。”',
            '同样的黑色伏尔加，同样的后排中间。车子开动时你回头看了一眼：你办公室的台灯还亮着，地图还摊着。'
          ],
          en: [
            'You hold your breath and do not move. Outside, a few seconds of silence — then the lock snaps with a crack and the door slams into the wall.',
            'Two men lift you off the chair and press you onto the maps. Your cheek lies against the cold desktop, your nose pointing straight at the page of the North Afghanistan Soviet Republic.',
            '"Pretending not to hear?" a voice says by your ear. "You cursed for a full four minutes in there. We heard everything."',
            'The same black Volga, the same middle of the back seat. As the car pulls away you glance back: in your office window the desk lamp is still on, the maps still spread out.'
          ]
        },
        choices: [
          { label: { en: 'Protest your innocence', zh: '喊冤' }, next: 'verdict-shut' },
          { label: { en: 'Stay silent', zh: '沉默' }, next: 'verdict-shut' }
        ]
      },

      'verdict-shut': {
        chapter: null,
        text: {
          zh: [
            '喊冤没有用。审讯员把一沓笔录推到你面前：你骂的每一个字都写在上面，标注着时间，精确到秒。',
            '判决和别人没什么不同：第七十条，七年劳改，五年流放。',
            '多年以后你会想：如果当时开了门，至少那扇门还能留下。'
          ],
          en: [
            'Protesting is useless. The interrogator slides a stack of transcripts at you: every word you cursed is written down, time-stamped to the second.',
            'The sentence is no different from anyone else’s: Article 70, seven years of camp, five years of exile.',
            'Years later you will wonder: if you had opened the door, at least the door would have survived.'
          ]
        },
        ending: { en: 'Breaking In', zh: '破门而入' }
      },

      /* ---- 翻资料支线 ---- */
      archives: {
        chapter: { en: 'Chapter II', zh: '第二章' },
        text: {
          zh: [
            '你在档案馆翻找了有关北阿富汗苏维埃共和国的资料。这里虽说是加盟共和国，但是其地区直接被红军控制，没有主席，没有议会。或许是刚刚成立的缘故吧。',
            '但资料到这里就结束了，或许，中央在隐瞒着什么？这么大一片土地居然只有这么一点记载。'
          ],
          en: [
            'You dig through the archives for material on the North Afghanistan Soviet Republic. It is called a union republic, yet the region is under direct Red Army control — no chairman, no parliament. Perhaps that is only because it was newly established.',
            'But the records stop there. Perhaps the center is hiding something? Such a vast stretch of land, with so little written about it.'
          ]
        },
        choices: [
          { label: { en: 'Keep digging', zh: '继续翻找' }, next: 'dig' }
        ]
      },

      dig: {
        chapter: { en: 'Chapter III', zh: '第三章' },
        text: {
          zh: [
            '你把档案馆当成了第二个家。白天整理地图，夜里翻旧卷宗：铁路货运时刻表、水泥和钢材的调拨单、建设银行的预算册，还有一封不知为什么没被烧掉的信。',
            '三个月以后，拼图开始成形：通往南方的铁路上，运的不是棉花，是混凝土；南方的荒原上，规划图用代号圈出一片又一片禁区——核试验场、卫星发射基地、远程导弹基地。北阿富汗苏维埃共和国不准备有主席，也不准备有议会。它要有的，是哨兵。',
            '中央的计划比你想的还要大：整个共和国，将变成一座巨大的、地图上不标注名字的军事设施。',
            '你把最重要的一页抄进笔记本，合上卷宗，吹灭台灯。'
          ],
          en: [
            'The archive becomes your second home. Maps by day; old files by night — railway freight timetables, requisition orders for cement and steel, the ledgers of the Construction Bank, and one letter that for some reason was never burned.',
            'Three months on, the puzzle begins to take shape: the southbound trains carry not cotton but concrete; on the planning maps of the southern steppe, coded labels mark off zone after forbidden zone — a nuclear test site, a satellite launch complex, long-range missile bases. The North Afghanistan Soviet Republic is not meant to have a chairman, or a parliament. It is meant to have sentries.',
            'The center’s plan is bigger than you imagined: the entire republic is to become one enormous military installation that no map will name.',
            'You copy the most important page into your notebook, close the file, and blow out the desk lamp.'
          ]
        },
        choices: [
          { label: { en: 'Get up and go home', zh: '起身回家' }, next: 'lights' }
        ]
      },

      lights: {
        chapter: { en: 'Chapter IV', zh: '第四章' },
        text: {
          zh: [
            '就在这一瞬间，档案馆的灯全亮了。白得晃眼。',
            '门口站着三个人。年长的那个手里拿着你的笔记本——你明明记得，把它锁在了抽屉里。',
            '“公民，”他说，“你今晚查的东西，超出了一个制图员需要知道的范围。”'
          ],
          en: [
            'At that very moment, every light in the archive comes on. White, dazzling.',
            'Three men stand in the doorway. The eldest is holding your notebook — the notebook you distinctly remember locking in your drawer.',
            '"Citizen," he says, "what you have been reading tonight exceeds what a cartographer needs to know."'
          ]
        },
        choices: [
          { label: { en: 'Explain that you were only sorting maps', zh: '解释：我只是在整理地图' }, next: 'ending-spy' },
          { label: { en: 'Say nothing', zh: '沉默' }, next: 'ending-spy' }
        ]
      },

      'ending-spy': {
        chapter: null,
        text: {
          zh: [
            '没有公开审判，没有律师。军事法庭只用了一个上午：刑法第六十四条，间谍罪，判处最高刑罚，立即执行。',
            '行刑前，他们问你有没有遗言。你想了想，说：把北阿富汗那一页，画准一点。',
            '母亲收到的不是电报，是一小盒骨灰，和一句解释：你的儿子，病逝了。',
            '第二年，新版《联盟地图集》如期出版。北阿富汗苏维埃共和国安安静静地躺在那一页上：一片空旷的草原，几条铁路，一个首府。没有禁区，没有基地，也没有你。'
          ],
          en: [
            'There is no open trial and no lawyer. The military tribunal takes one morning: Article 64 of the Criminal Code, espionage. The supreme measure of punishment, carried out immediately.',
            'Before the execution they ask whether you have any last words. You think for a moment, and say: draw the page of North Afghanistan accurately.',
            'What your mother receives is not a telegram but a small box of ashes, and one sentence of explanation: your son died of illness.',
            'The following year, the new Atlas of the Union is published on schedule. On its page the North Afghanistan Soviet Republic lies quietly: an empty steppe, a few railways, a capital. No forbidden zones, no bases — and no you.'
          ]
        },
        ending: { en: 'The Supreme Measure', zh: '最高刑罚' }
      }
    }
  };

  /* 游戏 UI 小文案：跟随页面语言（i18n.js 会改 <html lang>） */
  const UI = {
    en: { restart: 'Start over', ending: 'Ending' },
    zh: { restart: '重新开始', ending: '结局' }
  };

  const lang = () => (document.documentElement.lang.startsWith('zh') ? 'zh' : 'en');
  const ui = () => UI[lang()];

  /* 游玩状态：path 为经过的场景 id，picks 为每次选择的选项文案（双语保留，切语言可重放） */
  let path = [STORY.start];
  let picks = [];

  let lastTextWrap = null;

  function appendScene(id) {
    const L = lang();
    const scene = STORY.scenes[id];

    const block = document.createElement('div');
    block.className = 'story-game__scene';

    if (scene.chapter) {
      const h = document.createElement('p');
      h.className = 'story-game__chapter';
      h.textContent = scene.chapter[L];
      block.appendChild(h);
    }

    const textWrap = document.createElement('div');
    textWrap.className = 'story-game__text';

    if (scene.ending) {
      const badge = document.createElement('p');
      badge.className = 'story-game__ending-badge';
      badge.textContent = ui().ending;
      textWrap.appendChild(badge);

      const title = document.createElement('h2');
      title.className = 'story-game__ending-title';
      title.textContent = scene.ending[L];
      textWrap.appendChild(title);
    }

    scene.text[L].forEach((para) => {
      const p = document.createElement('p');
      p.textContent = para;
      textWrap.appendChild(p);
    });

    block.appendChild(textWrap);
    screenEl.insertBefore(block, choicesEl);
    lastTextWrap = textWrap;
    return block;
  }

  /* 把选中的选项以正文段落格式并入上一个场景的叙事 */
  function appendPick(label) {
    if (!lastTextWrap) return;
    const p = document.createElement('p');
    p.textContent = label;
    lastTextWrap.appendChild(p);
  }

  function fillChoices(id) {
    const L = lang();
    const scene = STORY.scenes[id];
    choicesEl.innerHTML = '';

    if (scene.ending) {
      const restart = document.createElement('button');
      restart.type = 'button';
      restart.className = 'story-game__choice';
      restart.textContent = '↺ ' + ui().restart;
      restart.addEventListener('click', restartGame);
      choicesEl.appendChild(restart);
      return;
    }

    scene.choices.forEach((choice) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'story-game__choice';
      btn.textContent = choice.label[L];
      btn.addEventListener('click', () => choose(choice));
      choicesEl.appendChild(btn);
    });
  }

  function choose(choice) {
    picks.push(choice.label);
    path.push(choice.next);

    appendPick(choice.label[lang()]);
    const newBlock = appendScene(choice.next);
    fillChoices(choice.next);

    if (!reduceMotion) {
      newBlock.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  function rebuild() {
    /* 清空（保留 choicesEl 容器），按 path/picks 重放 */
    screenEl.querySelectorAll('.story-game__scene').forEach((el) => el.remove());
    path.forEach((id, i) => {
      appendScene(id);
      if (i < picks.length) appendPick(picks[i][lang()]);
    });
    fillChoices(path[path.length - 1]);
  }

  function restartGame() {
    path = [STORY.start];
    picks = [];
    rebuild();
    if (!reduceMotion) {
      screenEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  /* 切换语言时按既有路径重放（章节/正文/选项/结局徽章全部跟随新语言） */
  new MutationObserver(rebuild)
    .observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  appendScene(STORY.start);
  fillChoices(STORY.start);
})();

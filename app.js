// ============================================================================
// DANIEL 3: EL HORNO DE FUEGO — Cuento Interactivo + Película Sincronizada
// Sincronizado segundo a segundo con la voz en off de Flow (narracion_flow.mp3)
// ============================================================================

const FLOW_AUDIO_PATH = "assets/audio/narracion_flow.mp3";

const STORY_SCENES = [
  {
    id: 1,
    title: "1. La Estatua de Oro en Dura",
    shortTitle: "1. La Estatua",
    bibleRef: "📜 Daniel 3:1-3",
    image: "assets/images/scene1.png",
    cameraEffect: "kb-zoom-in",
    fxType: "sparkles",
    ambientBg: "radial-gradient(circle at 50% 30%, #6b4c1b 0%, #241734 70%, #0d0818 100%)",
    sfxMood: "fanfare",
    beats: [
      {
        speaker: "📖 NARRADOR",
        audioStart: 0.0,
        audioEnd: 10.6,
        text: "Hace mucho tiempo en Babilonia, el rey Nabucodonosor mandó construir una gigantesca estatua de oro brillante que medía casi treinta metros de altura.",
        bubble: null
      },
      {
        speaker: "📖 NARRADOR + 👑 REY",
        audioStart: 10.6,
        audioEnd: 26.8,
        text: "La colocó en la gran llanura de Dura, donde brillaba bajo el sol como una montaña de fuego dorado visible desde muy lejos: «¡Miren mi grandiosa estatua de oro! ¡Convoquen a todos los líderes del imperio!»",
        bubble: {
          speaker: "👑 Rey Nabucodonosor",
          text: "«¡Miren mi grandiosa estatua de oro! ¡Convoquen a todos los líderes del imperio!»"
        }
      },
      {
        speaker: "📖 NARRADOR",
        audioStart: 26.8,
        audioEnd: 37.8,
        text: "Príncipes, gobernadores, jueces y capitanes de todas las provincias llegaron para la gran ceremonia de inauguración frente a la estatua.",
        bubble: null
      }
    ]
  },
  {
    id: 2,
    title: "2. La Orden Real y la Música",
    shortTitle: "2. La Orden Real",
    bibleRef: "📜 Daniel 3:4-7",
    image: "assets/images/scene2.png",
    cameraEffect: "kb-pan-right",
    fxType: "music",
    ambientBg: "radial-gradient(circle at 50% 30%, #5c346e 0%, #1f1338 70%, #0b0716 100%)",
    sfxMood: "music",
    beats: [
      {
        speaker: "📖 NARRADOR + 📯 HERALDO",
        audioStart: 37.8,
        audioEnd: 52.8,
        text: "Un heraldo real subió al frente con un pergamino y gritó con voz potente una orden para todos los pueblos y naciones: «¡Atención a todos! ¡Escuchen el mandato del rey Nabucodonosor!»",
        bubble: {
          speaker: "📯 Heraldo del Rey",
          text: "«¡Atención a todos! ¡Escuchen el mandato del rey Nabucodonosor!»"
        }
      },
      {
        speaker: "📯 HERALDO DEL REY",
        audioStart: 52.8,
        audioEnd: 63.8,
        text: "«Cuando escuchen el sonido de la trompeta, la flauta, el arpa y todos los instrumentos musicales, deberán inclinarse y adorar la estatua de oro.»",
        bubble: null
      },
      {
        speaker: "📯 HERALDO + 📖 NARRADOR",
        audioStart: 63.8,
        audioEnd: 77.2,
        text: "«¡Y cualquiera que no se incline ni la adore, será lanzado en ese mismo instante dentro de un horno de fuego ardiente!». De pronto... ¡comenzó a sonar la música!",
        bubble: {
          speaker: "🎺 Banda Real de Babilonia",
          text: "♪ ♫ ¡Suenan las trompetas, flautas y arpas en toda la llanura! ♪ ♫"
        }
      }
    ]
  },
  {
    id: 3,
    title: "3. Tres Jóvenes Valientes de Pie",
    shortTitle: "3. Tres Valientes",
    bibleRef: "📜 Daniel 3:8-12",
    image: "assets/images/scene3.png",
    cameraEffect: "kb-zoom-out",
    fxType: "courage",
    ambientBg: "radial-gradient(circle at 50% 30%, #1f4e6e 0%, #161838 70%, #090a18 100%)",
    sfxMood: "wind",
    beats: [
      {
        speaker: "📖 NARRADOR",
        audioStart: 77.2,
        audioEnd: 87.8,
        text: "Apenas sonó la música, miles de personas se postraron hasta el suelo frente a la estatua de oro... ¡todos, excepto tres jóvenes hebreos!",
        bubble: null
      },
      {
        speaker: "📖 NARRADOR + 🟦🟩🟥 AMIGOS",
        audioStart: 87.8,
        audioEnd: 105.2,
        text: "Eran Sadrac, Mesac y Abed-nego. Ellos amaban al único Dios verdadero y sabían que solo a Dios se debe adorar, así que permanecieron firmes de pie: «Nuestro corazón pertenece solo a Dios. ¡Nos mantendremos firmes!»",
        bubble: {
          speaker: "🟦🟩🟥 Sadrac, Mesac y Abed-nego",
          text: "«Nuestro corazón pertenece solo a Dios. ¡Nos mantendremos firmes!»"
        }
      },
      {
        speaker: "📖 NARRADOR + 🐍 CALDEOS",
        audioStart: 105.2,
        audioEnd: 118.8,
        text: "Al verlos de pie, unos astrólogos caldeos corrieron llenos de envidia a acusarlos ante el rey: «¡Oh rey, Sadrac, Mesac y Abed-nego no respetan tu decreto ni adoran tu estatua!»",
        bubble: {
          speaker: "🐍 Acusadores Caldeos",
          text: "«¡Oh rey, Sadrac, Mesac y Abed-nego no respetan tu decreto ni adoran tu estatua!»"
        }
      }
    ]
  },
  {
    id: 4,
    title: "4. Firmeza ante la Furia del Rey",
    shortTitle: "4. Fe Valiente",
    bibleRef: "📜 Daniel 3:13-18",
    image: "assets/images/scene4.png",
    cameraEffect: "kb-dramatic-shake",
    fxType: "anger",
    ambientBg: "radial-gradient(circle at 50% 30%, #6e1f2a 0%, #291229 70%, #0f0712 100%)",
    sfxMood: "tension",
    beats: [
      {
        speaker: "📖 NARRADOR + 👑 REY",
        audioStart: 118.8,
        audioEnd: 133.2,
        text: "El rey Nabucodonosor se puso rojo de furia y mandó traer a Sadrac, Mesac y Abed-nego frente a su trono real: «¡Si no adoran mi estatua ahora mismo, irán al horno de fuego! ¿Y qué dios podrá librarlos de mi mano?»",
        bubble: {
          speaker: "👑 Rey Nabucodonosor (Furioso)",
          text: "«¡Si no adoran mi estatua ahora mismo, irán al horno de fuego! ¿Y qué dios podrá librarlos de mi mano?»"
        }
      },
      {
        speaker: "🟦🟩🟥 SADRAC, MESAC Y ABED-NEGO",
        audioStart: 133.2,
        audioEnd: 147.8,
        text: "Con mucha paz y valentía, los tres amigos respondieron al rey sin temor: «¡Oh rey! El Dios a quien servimos tiene poder para librarnos del horno de fuego ardiente y de tu mano.»",
        bubble: {
          speaker: "🟦 Sadrac y 🟩 Mesac",
          text: "«¡Oh rey! El Dios a quien servimos tiene poder para librarnos del horno de fuego ardiente y de tu mano.»"
        }
      },
      {
        speaker: "🟦🟩🟥 SADRAC, MESAC Y ABED-NEGO",
        audioStart: 147.8,
        audioEnd: 160.2,
        text: "Y añadieron las palabras más valientes de todas: «¡Y aunque no lo hiciera, debes saber, oh rey, que no serviremos a tus dioses ni adoraremos la estatua de oro!»",
        bubble: {
          speaker: "🟥 Abed-nego",
          text: "«¡Y aunque no lo hiciera, no serviremos a tus dioses ni adoraremos la estatua de oro!»"
        }
      }
    ]
  },
  {
    id: 5,
    title: "5. El Horno Siete Veces Más Caliente",
    shortTitle: "5. El Horno",
    bibleRef: "📜 Daniel 3:19-23",
    image: "assets/images/scene5.png",
    cameraEffect: "kb-zoom-in",
    fxType: "furnace_outside",
    ambientBg: "radial-gradient(circle at 50% 30%, #852b12 0%, #361318 70%, #140709 100%)",
    sfxMood: "fire",
    beats: [
      {
        speaker: "📖 NARRADOR + 👑 REY",
        audioStart: 160.2,
        audioEnd: 176.2,
        text: "Al escuchar su respuesta, Nabucodonosor se llenó de tanta ira que su rostro cambió por completo y dio una orden terrible: «¡Calienten el horno siete veces más de lo acostumbrado! ¡Átenlos y láncenlos adentro!»",
        bubble: {
          speaker: "👑 Rey Nabucodonosor",
          text: "«¡Calienten el horno siete veces más de lo acostumbrado! ¡Átenlos y láncenlos adentro!»"
        }
      },
      {
        speaker: "📖 NARRADOR",
        audioStart: 176.2,
        audioEnd: 188.0,
        text: "El enorme horno de ladrillo rugía con llamas gigantescas. Los soldados más fuertes del ejército ataron a Sadrac, Mesac y Abed-nego con sus mantos y turbantes.",
        bubble: null
      },
      {
        speaker: "📖 NARRADOR + 🟦🟩🟥 AMIGOS",
        audioStart: 188.0,
        audioEnd: 204.2,
        text: "El calor era tan intenso que los soldados tuvieron que cubrirse el rostro mientras los tres amigos subían hacia el fuego confiando plenamente en Dios: «Señor, estamos en tus manos. ¡Tú estás con nosotros!»",
        bubble: {
          speaker: "🟦🟩🟥 Los Tres Amigos",
          text: "«Señor, estamos en tus manos. ¡Tú estás con nosotros!»"
        }
      }
    ]
  },
  {
    id: 6,
    title: "6. El Milagro en Medio del Fuego",
    shortTitle: "6. El Milagro",
    bibleRef: "📜 Daniel 3:24-25",
    image: "assets/images/scene6.png",
    cameraEffect: "kb-zoom-out",
    fxType: "miracle",
    ambientBg: "radial-gradient(circle at 50% 30%, #8f5c15 0%, #3b1d12 70%, #140a08 100%)",
    sfxMood: "miracle",
    beats: [
      {
        speaker: "📖 NARRADOR",
        audioStart: 204.2,
        audioEnd: 214.2,
        text: "Entonces ocurrió un milagro asombroso dentro del horno: ¡las únicas cosas que el fuego quemó fueron las cuerdas que ataban sus manos!",
        bubble: null
      },
      {
        speaker: "📖 NARRADOR + ✨ ÁNGEL",
        audioStart: 214.2,
        audioEnd: 233.8,
        text: "Una luz celestial fresca y dorada rodeó a Sadrac, Mesac y Abed-nego. Ellos caminaban libres y felices en medio de las llamas, ¡y no estaban solos!: «No teman, siervos fieles. ¡El Dios Altísimo está con ustedes en medio del fuego!»",
        bubble: {
          speaker: "✨ Presencia Celestial",
          text: "«No teman, siervos fieles. ¡El Dios Altísimo está con ustedes en medio del fuego!»"
        }
      },
      {
        speaker: "📖 NARRADOR + 👑 REY",
        audioStart: 233.8,
        audioEnd: 254.2,
        text: "El rey Nabucodonosor miró hacia adentro y se levantó de un salto, totalmente asombrado, preguntando a sus consejeros: «¿No echaron a tres hombres atados? ¡Pues yo veo a cuatro hombres sueltos que pasean en medio del fuego, y el cuarto parece un ángel de Dios!»",
        bubble: {
          speaker: "👑 Rey Nabucodonosor (Asombrado)",
          text: "«¡Yo veo a CUATRO hombres sueltos que pasean en medio del fuego, y el cuarto parece un ángel de Dios!»"
        }
      }
    ]
  },
  {
    id: 7,
    title: "7. ¡Salgan del Horno Sin Ningún Daño!",
    shortTitle: "7. Ilesos",
    bibleRef: "📜 Daniel 3:26-27",
    image: "assets/images/scene7.png",
    cameraEffect: "kb-pan-left",
    fxType: "wonder",
    ambientBg: "radial-gradient(circle at 50% 30%, #4d4818 0%, #1c1a38 70%, #0a0917 100%)",
    sfxMood: "wonder",
    beats: [
      {
        speaker: "📖 NARRADOR + 👑 REY",
        audioStart: 254.2,
        audioEnd: 268.2,
        text: "Nabucodonosor se acercó a la puerta del horno de fuego ardiente y los llamó con profundo respeto: «¡Sadrac, Mesac y Abed-nego, siervos del Dios Altísimo, salgan y vengan aquí!»",
        bubble: {
          speaker: "👑 Rey Nabucodonosor",
          text: "«¡Sadrac, Mesac y Abed-nego, siervos del Dios Altísimo, salgan y vengan aquí!»"
        }
      },
      {
        speaker: "📖 NARRADOR",
        audioStart: 268.2,
        audioEnd: 279.5,
        text: "Los tres amigos salieron caminando del horno con una gran sonrisa. Todos los príncipes, gobernadores y consejeros del rey se acercaron a mirarlos con la boca abierta.",
        bubble: null
      },
      {
        speaker: "📖 NARRADOR",
        audioStart: 279.5,
        audioEnd: 291.8,
        text: "¡El fuego no había tenido ningún poder sobre ellos! Ni un solo cabello de su cabeza se había quemado, sus ropas estaban intactas, ¡y ni siquiera tenían olor a humo!",
        bubble: {
          speaker: "😮 Nobles de Babilonia",
          text: "«¡Ni un cabello quemado y ni siquiera tienen olor a humo!»"
        }
      }
    ]
  },
  {
    id: 8,
    title: "8. Alabanza y Victoria en Babilonia",
    shortTitle: "8. Alabanza",
    bibleRef: "📜 Daniel 3:28-30",
    image: "assets/images/scene8.png",
    cameraEffect: "kb-zoom-in",
    fxType: "celebration",
    ambientBg: "radial-gradient(circle at 50% 30%, #5e4418 0%, #241942 70%, #0d081c 100%)",
    sfxMood: "victory",
    beats: [
      {
        speaker: "📖 NARRADOR + 👑 REY",
        audioStart: 291.8,
        audioEnd: 312.2,
        text: "Conmovido por el poder de Dios, el rey Nabucodonosor levantó sus manos al cielo delante de todo el pueblo y exclamó: «¡Bendito sea el Dios de Sadrac, Mesac y Abed-nego, que envió a su ángel y libró a sus siervos que confiaron en Él!»",
        bubble: {
          speaker: "👑 Rey Nabucodonosor",
          text: "«¡Bendito sea el Dios de Sadrac, Mesac y Abed-nego, que envió a su ángel y libró a sus siervos!»"
        }
      },
      {
        speaker: "📖 NARRADOR",
        audioStart: 312.2,
        audioEnd: 321.5,
        text: "El rey proclamó un nuevo decreto en todo el imperio reconociendo que no hay ningún otro dios que pueda librar así como el Dios de Israel.",
        bubble: null
      },
      {
        speaker: "📖 NARRADOR + 🟦🟩🟥 AMIGOS",
        audioStart: 321.5,
        audioEnd: 338.0,
        text: "Y el rey engrandeció y promovió a Sadrac, Mesac y Abed-nego en la provincia de Babilonia, premiando su fe inquebrantable y su gran valentía: «¡Toda la gloria y la gratitud son para Dios, que nunca nos abandona!»",
        bubble: {
          speaker: "🟦🟩🟥 Sadrac, Mesac y Abed-nego",
          text: "«¡Toda la gloria y la gratitud son para Dios, que nunca nos abandona!»"
        }
      }
    ]
  }
];

// ============================================================================
// ESTADO DE LA APLICACIÓN Y REPRODUCTOR DE VOZ EN OFF DE FLOW
// ============================================================================
let currentSceneIndex = 0;
let currentBeatIndex = 0;
let activeLayer = 'a';
let isAutoPlay = false;
let isSfxEnabled = true;
let isVoiceEnabled = true;

let selectedVoiceURI = 'FLOW_MASTER'; // Usa por defecto el audio de Flow subido por el usuario
let voiceRate = 1.0;
let voicePitch = 0.80;
let isCharacterVoiceMode = true;

// Elemento de audio maestro con la voz en off de Flow
const flowMasterAudio = new Audio(FLOW_AUDIO_PATH);
flowMasterAudio.preload = 'auto';

let wordRevealTimer = null;
let autoAdvanceTimer = null;
let progressInterval = null;

// Elementos del DOM
const storyAppEl = document.getElementById('story-app');
const stageEl = document.getElementById('stage');
const coverOverlay = document.getElementById('cover-overlay');
const ambientBg = document.getElementById('ambient-bg');
const sceneHeaderTitle = document.getElementById('scene-header-title');
const sceneDotsContainer = document.getElementById('scene-dots');
const thumbnailsStrip = document.getElementById('thumbnails-strip');
const layerA = document.getElementById('scene-img-layer-a');
const layerB = document.getElementById('scene-img-layer-b');
const bibleRefBadge = document.getElementById('bible-ref-badge');
const stepCounterBadge = document.getElementById('step-counter-badge');
const speechBubble = document.getElementById('speech-bubble');
const speechSpeaker = document.getElementById('speech-speaker');
const speechText = document.getElementById('speech-text');
const narratorBadge = document.getElementById('narrator-badge');
const beatIndicators = document.getElementById('beat-indicators');
const subtitleText = document.getElementById('subtitle-text');
const subtitleProgressBar = document.getElementById('subtitle-progress-bar');

const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const stagePrevBtn = document.getElementById('stage-prev-btn');
const stageNextBtn = document.getElementById('stage-next-btn');
const btnReplayBeat = document.getElementById('btn-replay-beat');
const btnAutoplay = document.getElementById('btn-autoplay');
const autoplayIcon = document.getElementById('autoplay-icon');
const autoplayLabel = document.getElementById('autoplay-label');
const btnSfx = document.getElementById('btn-sfx');
const sfxIcon = document.getElementById('sfx-icon');
const btnVoice = document.getElementById('btn-voice');
const voiceIcon = document.getElementById('voice-icon');
const endingModal = document.getElementById('ending-modal');

// ============================================================================
// MOTOR DE AUDIO SINTETIZADO AMBIENTAL (WEB AUDIO API)
// ============================================================================
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playStepChime() {
  if (!isSfxEnabled) return;
  initAudio();
  if (!audioCtx) return;

  const now = audioCtx.currentTime;
  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();
  osc.type = 'sine';
  osc.frequency.setValueAtTime(523.25, now);
  osc.frequency.exponentialRampToValueAtTime(659.25, now + 0.12);
  gain.gain.setValueAtTime(0.04, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
  osc.connect(gain);
  gain.connect(audioCtx.destination);
  osc.start(now);
  osc.stop(now + 0.22);
}

function playSceneMoodSound(mood) {
  if (!isSfxEnabled) return;
  initAudio();
  if (!audioCtx) return;

  const now = audioCtx.currentTime;

  if (mood === 'fanfare' || mood === 'music' || mood === 'victory') {
    const notes = mood === 'victory' ? [261.6, 329.6, 392.0, 523.25] : [293.66, 369.99, 440.0];
    notes.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.1);
      gain.gain.setValueAtTime(0.035, now + idx * 0.1);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.1 + 0.5);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + idx * 0.1);
      osc.stop(now + idx * 0.1 + 0.5);
    });
  } else if (mood === 'miracle' || mood === 'wonder') {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      gain.gain.setValueAtTime(0.035, now + idx * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.7);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.7);
    });
  } else if (mood === 'fire' || mood === 'tension') {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(110, now);
    osc.frequency.linearRampToValueAtTime(85, now + 0.4);
    gain.gain.setValueAtTime(0.03, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start(now);
    osc.stop(now + 0.45);
  }
}

// ============================================================================
// PANEL DE VOZ: PRIORIZA EL AUDIO DE FLOW + OPCIONES DEL NAVEGADOR
// ============================================================================
let availableSpanishVoices = [];
const MALE_VOICE_NAMES = [
  'jorge', 'alvaro', 'álvaro', 'alonso', 'raul', 'raúl', 'pablo',
  'tomas', 'tomás', 'lorenzo', 'emilio', 'gonzalo', 'arnau', 'dario',
  'darío', 'federico', 'rodrigo', 'sebastian', 'sebastián', 'mateo',
  'carlos', 'diego', 'juan', 'andres', 'andrés', 'male', 'hombre'
];

function isMaleVoice(voice) {
  const n = (voice.name || '').toLowerCase();
  return MALE_VOICE_NAMES.some(m => n.includes(m));
}

function getVoiceScore(voice) {
  let score = 0;
  const n = (voice.name || '').toLowerCase();
  if (isMaleVoice(voice)) score += 100;
  if (n.includes('natural') || n.includes('neural') || n.includes('online')) score += 50;
  if (n.includes('jorge') || n.includes('alvaro') || n.includes('álvaro') || n.includes('alonso')) score += 25;
  if (n.includes('google')) score += 10;
  return score;
}

const voiceSettingsPanel = document.getElementById('voice-settings-panel');
const voiceSelect = document.getElementById('voice-select');
const voiceCountLabel = document.getElementById('voice-count-label');
const voiceQuickList = document.getElementById('voice-quick-list');
const voiceRateInput = document.getElementById('voice-rate');
const voiceRateVal = document.getElementById('voice-rate-val');
const voicePitchInput = document.getElementById('voice-pitch');
const voicePitchVal = document.getElementById('voice-pitch-val');
const voiceCharacterCheckbox = document.getElementById('voice-character-mode');

function populateVoiceList() {
  if (!voiceSelect) return;

  const allVoices = ('speechSynthesis' in window) ? window.speechSynthesis.getVoices() : [];
  const esVoices = allVoices.filter(v => v.lang.toLowerCase().startsWith('es'));
  availableSpanishVoices = esVoices.length > 0 ? esVoices : allVoices;
  availableSpanishVoices.sort((a, b) => getVoiceScore(b) - getVoiceScore(a));

  if (voiceCountLabel) {
    voiceCountLabel.textContent = `Voz en off activa (Flow MP3 + ${availableSpanishVoices.length} voces extra):`;
  }

  voiceSelect.innerHTML = '';
  if (voiceQuickList) voiceQuickList.innerHTML = '';

  // Opción Principal: Voz en Off de Flow subida por el usuario
  const flowOpt = document.createElement('option');
  flowOpt.value = 'FLOW_MASTER';
  flowOpt.textContent = '🎙️ Voz en Off de Flow (Estudio Profunda — Activa)';
  voiceSelect.appendChild(flowOpt);

  if (voiceQuickList) {
    const flowBtn = document.createElement('button');
    flowBtn.type = 'button';
    flowBtn.className = 'voice-item-btn' + (selectedVoiceURI === 'FLOW_MASTER' ? ' active' : '');
    flowBtn.innerHTML = `
      <span>🎙️ Voz en Off de Flow (narracion_flow.mp3)</span>
      <span class="voice-badge-tag">⭐ Tu Audio</span>
    `;
    flowBtn.addEventListener('click', () => {
      selectedVoiceURI = 'FLOW_MASTER';
      voiceSelect.value = 'FLOW_MASTER';
      voiceQuickList.querySelectorAll('.voice-item-btn').forEach(b => b.classList.remove('active'));
      flowBtn.classList.add('active');
      enableAndPlayCurrentBeat();
    });
    voiceQuickList.appendChild(flowBtn);
  }

  availableSpanishVoices.forEach((voice) => {
    const male = isMaleVoice(voice);
    const isNatural = voice.name.includes('Natural');
    const genderLabel = male ? '🧔🏻‍♂️ Masculina' : '👩🏻 Femenina';

    const opt = document.createElement('option');
    opt.value = voice.voiceURI;
    opt.textContent = `${male ? '🧔🏻‍♂️ ' : ''}${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(opt);

    if (voiceQuickList) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'voice-item-btn' + (voice.voiceURI === selectedVoiceURI ? ' active' : '');
      const badgeText = isNatural ? `✨ IA • ${genderLabel}` : `${genderLabel} (${voice.lang})`;
      btn.innerHTML = `
        <span>🗣️ ${voice.name.replace('Microsoft ', '').replace('Online (Natural)', '')}</span>
        <span class="voice-badge-tag">${badgeText}</span>
      `;
      btn.addEventListener('click', () => {
        selectedVoiceURI = voice.voiceURI;
        voiceSelect.value = selectedVoiceURI;
        voiceQuickList.querySelectorAll('.voice-item-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        enableAndPlayCurrentBeat();
      });
      voiceQuickList.appendChild(btn);
    }
  });

  voiceSelect.value = selectedVoiceURI;
}

if ('speechSynthesis' in window) {
  populateVoiceList();
  window.speechSynthesis.onvoiceschanged = populateVoiceList;
}

function enableAndPlayCurrentBeat() {
  if (!isVoiceEnabled) {
    isVoiceEnabled = true;
    btnVoice.classList.add('active');
    voiceIcon.textContent = '🔊';
  }
  renderCurrentBeat(true);
}

function getSelectedVoiceObject() {
  if (!('speechSynthesis' in window)) return null;
  const allVoices = window.speechSynthesis.getVoices();
  if (selectedVoiceURI && selectedVoiceURI !== 'FLOW_MASTER') {
    const found = allVoices.find(v => v.voiceURI === selectedVoiceURI);
    if (found) return found;
  }
  const esVoices = allVoices.filter(v => v.lang.toLowerCase().startsWith('es'));
  const pool = esVoices.length > 0 ? esVoices : allVoices;
  const sorted = [...pool].sort((a, b) => getVoiceScore(b) - getVoiceScore(a));
  return sorted[0] || null;
}

function stopAllVoicePlayback() {
  flowMasterAudio.pause();
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}

// ============================================================================
// CONSTRUCCIÓN DE INTERFAZ Y NAVEGACIÓN
// ============================================================================
function buildNavigationUI() {
  sceneDotsContainer.innerHTML = '';
  thumbnailsStrip.innerHTML = '';

  STORY_SCENES.forEach((scene, index) => {
    const dot = document.createElement('button');
    dot.className = 'scene-dot';
    dot.textContent = scene.id;
    dot.title = scene.title;
    dot.addEventListener('click', () => goToScene(index, 0));
    sceneDotsContainer.appendChild(dot);

    const thumb = document.createElement('div');
    thumb.className = 'thumb-item';
    thumb.innerHTML = `
      <img src="${scene.image}" alt="${scene.title}" class="thumb-img" loading="lazy" />
      <div class="thumb-label">${scene.shortTitle}</div>
    `;
    thumb.addEventListener('click', () => goToScene(index, 0));
    thumbnailsStrip.appendChild(thumb);
  });
}

function updateNavigationHighlights() {
  const dots = sceneDotsContainer.querySelectorAll('.scene-dot');
  dots.forEach((d, idx) => d.classList.toggle('active', idx === currentSceneIndex));

  const thumbs = thumbnailsStrip.querySelectorAll('.thumb-item');
  thumbs.forEach((t, idx) => t.classList.toggle('active', idx === currentSceneIndex));

  const isVeryFirst = currentSceneIndex === 0 && currentBeatIndex === 0;
  btnPrev.disabled = isVeryFirst;
  stagePrevBtn.style.opacity = isVeryFirst ? '0.35' : '1';

  const isVeryLast =
    currentSceneIndex === STORY_SCENES.length - 1 &&
    currentBeatIndex === STORY_SCENES[currentSceneIndex].beats.length - 1;

  btnNext.innerHTML = isVeryLast ? '🌟 Finalizar Cuento' : 'Siguiente ➡️';
}

// ============================================================================
// RENDERIZADO DE ESCENA Y SINCRONIZACIÓN EXACTA CON LA VOZ DE FLOW
// ============================================================================
function goToScene(sceneIndex, beatIndex = 0, playMoodSound = true, seekAudio = true) {
  const sceneChanged = sceneIndex !== currentSceneIndex || (!layerA.style.backgroundImage && !layerB.style.backgroundImage);
  currentSceneIndex = sceneIndex;
  currentBeatIndex = beatIndex;

  const scene = STORY_SCENES[currentSceneIndex];

  sceneHeaderTitle.textContent = scene.title;
  bibleRefBadge.textContent = scene.bibleRef;
  ambientBg.style.background = scene.ambientBg;

  if (sceneChanged) {
    const nextLayer = activeLayer === 'a' ? layerB : layerA;
    const currentLayer = activeLayer === 'a' ? layerA : layerB;

    nextLayer.className = 'scene-img-layer';
    nextLayer.style.backgroundImage = `url('${scene.image}')`;
    void nextLayer.offsetWidth;
    nextLayer.classList.add('active', scene.cameraEffect);
    currentLayer.classList.remove('active');

    activeLayer = activeLayer === 'a' ? 'b' : 'a';

    setCanvasEffect(scene.fxType);

    if (playMoodSound) {
      playSceneMoodSound(scene.sfxMood);
    }
  }

  renderCurrentBeat(seekAudio);
  updateNavigationHighlights();
}

function renderCurrentBeat(seekAudio = true) {
  clearTimers();

  const scene = STORY_SCENES[currentSceneIndex];
  const beat = scene.beats[currentBeatIndex];
  const totalBeats = scene.beats.length;

  stepCounterBadge.textContent = `Escena ${scene.id}/8 • Parte ${currentBeatIndex + 1} de ${totalBeats}`;
  narratorBadge.textContent = beat.speaker;

  beatIndicators.innerHTML = '';
  for (let i = 0; i < totalBeats; i++) {
    const dot = document.createElement('span');
    dot.className = 'beat-dot';
    if (i < currentBeatIndex) dot.classList.add('completed');
    if (i === currentBeatIndex) dot.classList.add('active');
    dot.title = `Ir a la parte ${i + 1}`;
    dot.addEventListener('click', () => {
      currentBeatIndex = i;
      playStepChime();
      renderCurrentBeat(true);
      updateNavigationHighlights();
    });
    beatIndicators.appendChild(dot);
  }

  // Globo de diálogo
  if (beat.bubble) {
    speechBubble.classList.remove('hidden');
    speechBubble.style.animation = 'none';
    void speechBubble.offsetWidth;
    speechBubble.style.animation = 'popBubble 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
    speechSpeaker.textContent = beat.bubble.speaker;
    speechText.textContent = beat.bubble.text;
  } else {
    speechBubble.classList.add('hidden');
  }

  // Construir palabras del subtítulo estilo TikTok
  const words = beat.text.split(' ');
  subtitleText.innerHTML = words
    .map((w, idx) => `<span class="subtitle-word" data-idx="${idx}">${w}</span>`)
    .join('');

  const wordSpans = subtitleText.querySelectorAll('.subtitle-word');
  const beatDurationSec = Math.max(2.5, beat.audioEnd - beat.audioStart);

  // Si la voz está activada y es el audio maestro de Flow
  if (isVoiceEnabled && selectedVoiceURI === 'FLOW_MASTER') {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    flowMasterAudio.playbackRate = voiceRate;

    if (seekAudio || Math.abs(flowMasterAudio.currentTime - beat.audioStart) > 1.2) {
      flowMasterAudio.currentTime = beat.audioStart;
    }

    if (!coverOverlay.classList.contains('hidden')) {
      // Aún en portada: no reproducir hasta que el usuario inicie
      return;
    }

    flowMasterAudio.play().catch(() => {});

    // Sincronizar cada palabra y barra de progreso en tiempo real con flowMasterAudio.currentTime
    progressInterval = setInterval(() => {
      const cur = flowMasterAudio.currentTime;
      const elapsedInBeat = Math.max(0, cur - beat.audioStart);
      const ratio = Math.min(1, elapsedInBeat / beatDurationSec);

      subtitleProgressBar.style.width = `${ratio * 100}%`;

      // Índice de palabra activa según el progreso real de la locución de Flow
      const activeWordIdx = Math.min(words.length - 1, Math.floor(ratio * words.length));
      wordSpans.forEach((sp, i) => {
        sp.classList.toggle('spoken', i < activeWordIdx);
        sp.classList.toggle('current', i === activeWordIdx);
      });

      // ¿Llegó al final de este segmento del audio de Flow?
      if (cur >= beat.audioEnd - 0.08) {
        clearInterval(progressInterval);
        wordSpans.forEach(sp => {
          sp.classList.add('spoken');
          sp.classList.remove('current');
        });
        subtitleProgressBar.style.width = '100%';

        if (isAutoPlay) {
          // En modo Película Automática: pasa de inmediato al siguiente subtítulo/escena sin cortar el audio de Flow
          nextStep(false);
        } else {
          // En modo Paso a Paso: pausa al terminar el párrafo esperando que el usuario pulse Siguiente
          flowMasterAudio.pause();
        }
      }
    }, 40);

    return;
  }

  // Respaldo: Si el usuario desactivó la voz o eligió una voz sintética del navegador
  flowMasterAudio.pause();
  const totalReadingTimeMs = (beatDurationSec * 1000) / voiceRate;
  const msPerWord = totalReadingTimeMs / Math.max(1, words.length);
  let currentWordIdx = 0;

  subtitleProgressBar.style.width = '0%';

  wordRevealTimer = setInterval(() => {
    if (currentWordIdx < wordSpans.length) {
      wordSpans.forEach((sp, i) => {
        sp.classList.toggle('spoken', i < currentWordIdx);
        sp.classList.toggle('current', i === currentWordIdx);
      });
      currentWordIdx++;
    } else {
      wordSpans.forEach(sp => {
        sp.classList.add('spoken');
        sp.classList.remove('current');
      });
      clearInterval(wordRevealTimer);
    }
  }, msPerWord);

  const startTime = performance.now();
  progressInterval = setInterval(() => {
    const elapsed = performance.now() - startTime;
    const pct = Math.min(100, (elapsed / totalReadingTimeMs) * 100);
    subtitleProgressBar.style.width = `${pct}%`;

    if (pct >= 100) {
      clearInterval(progressInterval);
      if (isAutoPlay) {
        autoAdvanceTimer = setTimeout(() => {
          nextStep(true);
        }, 250);
      }
    }
  }, 50);

  if (isVoiceEnabled && selectedVoiceURI !== 'FLOW_MASTER' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const chosenVoice = getSelectedVoiceObject();
    const utter = new SpeechSynthesisUtterance(beat.text.replace(/[«»]/g, ''));
    if (chosenVoice) {
      utter.voice = chosenVoice;
      utter.lang = chosenVoice.lang;
    }
    utter.rate = voiceRate;
    utter.pitch = voicePitch;
    window.speechSynthesis.speak(utter);
  }
}

function clearTimers() {
  if (wordRevealTimer) clearInterval(wordRevealTimer);
  if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
  if (progressInterval) clearInterval(progressInterval);
}

function nextStep(seekAudio = true) {
  const scene = STORY_SCENES[currentSceneIndex];
  if (currentBeatIndex < scene.beats.length - 1) {
    currentBeatIndex++;
    if (seekAudio) playStepChime();
    renderCurrentBeat(seekAudio);
    updateNavigationHighlights();
  } else if (currentSceneIndex < STORY_SCENES.length - 1) {
    goToScene(currentSceneIndex + 1, 0, true, seekAudio);
  } else {
    // Fin del cuento
    if (isAutoPlay) toggleAutoPlay(false);
    stopAllVoicePlayback();
    if (isRecordingVideo) {
      stopVideoExport();
    }
    playSceneMoodSound('victory');
    endingModal.classList.remove('hidden');
  }
}

function prevStep() {
  if (currentBeatIndex > 0) {
    currentBeatIndex--;
    playStepChime();
    renderCurrentBeat(true);
    updateNavigationHighlights();
  } else if (currentSceneIndex > 0) {
    const prevSceneIdx = currentSceneIndex - 1;
    const lastBeatIdx = STORY_SCENES[prevSceneIdx].beats.length - 1;
    goToScene(prevSceneIdx, lastBeatIdx, true, true);
  }
}

function toggleAutoPlay(forceState) {
  isAutoPlay = typeof forceState === 'boolean' ? forceState : !isAutoPlay;
  btnAutoplay.classList.toggle('active', isAutoPlay);
  autoplayIcon.textContent = isAutoPlay ? '⏸️' : '▶️';
  autoplayLabel.textContent = isAutoPlay ? 'Pausar Auto' : 'Auto';

  if (isAutoPlay) {
    renderCurrentBeat(false);
  } else {
    if (autoAdvanceTimer) clearTimeout(autoAdvanceTimer);
    flowMasterAudio.pause();
  }
}

// ============================================================================
// SISTEMA DE PARTÍCULAS Y EFECTOS ANIMADOS EN CANVAS
// ============================================================================
const canvas = document.getElementById('fx-canvas');
const ctx = canvas.getContext('2d');
let currentFxType = 'sparkles';
let particles = [];

function resizeCanvas() {
  const rect = canvas.parentElement.getBoundingClientRect();
  canvas.width = rect.width || 1280;
  canvas.height = rect.height || 720;
}
window.addEventListener('resize', resizeCanvas);

function setCanvasEffect(fxType) {
  currentFxType = fxType;
  particles = [];
  resizeCanvas();

  const count = fxType === 'furnace_outside' || fxType === 'miracle' ? 65 : 38;
  for (let i = 0; i < count; i++) {
    particles.push(createParticle(fxType, true));
  }
}

function createParticle(fxType, randomY = false) {
  const w = canvas.width || 1280;
  const h = canvas.height || 720;

  if (fxType === 'sparkles' || fxType === 'wonder') {
    return {
      x: Math.random() * w,
      y: randomY ? Math.random() * h : h + 10,
      size: 3 + Math.random() * 6,
      vx: (Math.random() - 0.5) * 0.6,
      vy: -0.4 - Math.random() * 0.8,
      alpha: 0.2 + Math.random() * 0.8,
      pulseSpeed: 0.03 + Math.random() * 0.04,
      phase: Math.random() * Math.PI * 2,
      color: Math.random() > 0.3 ? '#ffe680' : '#ffffff'
    };
  }

  if (fxType === 'music') {
    const symbols = ['♪', '♫', '♬', '♩'];
    const colors = ['#ffcc33', '#38bdf8', '#4ade80', '#fb7185', '#f472b6'];
    return {
      x: Math.random() * w,
      y: randomY ? Math.random() * h : h + 20,
      size: 18 + Math.random() * 16,
      vx: 0.6 + Math.random() * 1.1,
      vy: -0.8 - Math.random() * 1.2,
      phase: Math.random() * Math.PI * 2,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      alpha: 0.65 + Math.random() * 0.35
    };
  }

  if (fxType === 'courage') {
    return {
      x: randomY ? Math.random() * w : -10,
      y: Math.random() * h,
      size: 2 + Math.random() * 4,
      vx: 1.2 + Math.random() * 2.0,
      vy: (Math.random() - 0.5) * 0.5,
      alpha: 0.3 + Math.random() * 0.5,
      color: '#bae6fd'
    };
  }

  if (fxType === 'anger' || fxType === 'furnace_outside') {
    const fireColors = ['#ff4500', '#ff7b00', '#ffcc00', '#ff2200'];
    return {
      x: Math.random() * w,
      y: randomY ? Math.random() * h : h + 15,
      size: fxType === 'furnace_outside' ? 6 + Math.random() * 18 : 3 + Math.random() * 7,
      vx: (Math.random() - 0.5) * 1.8,
      vy: -1.8 - Math.random() * 3.2,
      alpha: 0.5 + Math.random() * 0.5,
      color: fireColors[Math.floor(Math.random() * fireColors.length)]
    };
  }

  if (fxType === 'miracle') {
    const isCenter = Math.random() > 0.45;
    return {
      x: isCenter ? w * 0.25 + Math.random() * (w * 0.5) : Math.random() * w,
      y: randomY ? Math.random() * h : h + 15,
      size: isCenter ? 4 + Math.random() * 9 : 8 + Math.random() * 16,
      vx: (Math.random() - 0.5) * 1.2,
      vy: -1.0 - Math.random() * 2.2,
      alpha: 0.5 + Math.random() * 0.5,
      isHeavenly: isCenter,
      color: isCenter ? '#fffbeb' : '#ff6b2b'
    };
  }

  const confColors = ['#ffcc33', '#38bdf8', '#4ade80', '#fb7185', '#c084fc', '#ffffff'];
  return {
    x: Math.random() * w,
    y: randomY ? Math.random() * h : -15,
    size: 5 + Math.random() * 7,
    vx: (Math.random() - 0.5) * 1.5,
    vy: 1.0 + Math.random() * 2.0,
    phase: Math.random() * Math.PI * 2,
    color: confColors[Math.floor(Math.random() * confColors.length)],
    alpha: 0.85
  };
}

function drawStar(cx, cy, spikes, outerRadius, innerRadius, color, alpha) {
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  ctx.save();
  ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
  ctx.beginPath();
  ctx.moveTo(cx, cy - outerRadius);
  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    ctx.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    ctx.lineTo(x, y);
    rot += step;
  }
  ctx.lineTo(cx, cy - outerRadius);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.shadowColor = color;
  ctx.shadowBlur = 10;
  ctx.fill();
  ctx.restore();
}

function animateCanvas() {
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  if (currentFxType === 'miracle') {
    const grad = ctx.createRadialGradient(w * 0.5, h * 0.48, 20, w * 0.5, h * 0.48, w * 0.35);
    grad.addColorStop(0, 'rgba(255, 250, 210, 0.22)');
    grad.addColorStop(0.6, 'rgba(255, 204, 51, 0.08)');
    grad.addColorStop(1, 'rgba(255, 107, 43, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
  }

  for (let i = 0; i < particles.length; i++) {
    const p = particles[i];
    p.x += p.vx;
    p.y += p.vy;

    if (currentFxType === 'sparkles' || currentFxType === 'wonder') {
      p.phase += p.pulseSpeed;
      const currentAlpha = 0.3 + Math.sin(p.phase) * 0.5;
      drawStar(p.x, p.y, 4, p.size * 1.6, p.size * 0.45, p.color, currentAlpha);
      if (p.y < -20) particles[i] = createParticle(currentFxType, false);
    } else if (currentFxType === 'music') {
      p.phase += 0.04;
      ctx.save();
      ctx.font = `bold ${Math.round(p.size)}px 'Fredoka', sans-serif`;
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowColor = '#000';
      ctx.shadowBlur = 6;
      ctx.fillText(p.symbol, p.x + Math.sin(p.phase) * 10, p.y);
      ctx.restore();
      if (p.y < -30 || p.x > w + 30) particles[i] = createParticle(currentFxType, false);
    } else if (currentFxType === 'courage') {
      ctx.save();
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      if (p.x > w + 20) particles[i] = createParticle(currentFxType, false);
    } else if (currentFxType === 'anger' || currentFxType === 'furnace_outside' || currentFxType === 'miracle') {
      ctx.save();
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowColor = p.color;
      ctx.shadowBlur = 12;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
      p.size *= 0.994;
      if (p.y < -20 || p.size < 1.2) particles[i] = createParticle(currentFxType, false);
    } else if (currentFxType === 'celebration') {
      p.phase += 0.06;
      drawStar(p.x + Math.sin(p.phase) * 6, p.y, 5, p.size * 1.4, p.size * 0.6, p.color, p.alpha);
      if (p.y > h + 20) particles[i] = createParticle(currentFxType, false);
    }
  }

  requestAnimationFrame(animateCanvas);
}

// ============================================================================
// EXPORTACIÓN A VIDEO (.WEBM) CON IMAGEN + PARTÍCULAS + SUBTÍTULOS + VOZ FLOW
// ============================================================================
let isRecordingVideo = false;
let mediaRecorder = null;
let recordedChunks = [];
const btnExportVideo = document.getElementById('btn-export-video');
const exportIcon = document.getElementById('export-icon');
const exportLabel = document.getElementById('export-label');

// Precargar objetos Image de las 8 escenas para poder dibujarlos en un canvas de exportación
const preloadedSceneImages = {};
STORY_SCENES.forEach(s => {
  const img = new Image();
  img.src = s.image;
  preloadedSceneImages[s.id] = img;
});

let exportCanvas = null;
let exportCtx = null;
let exportAnimId = null;
let mediaElementSourceNode = null;
let exportAudioDest = null;

function startVideoExport() {
  initAudio();
  exportCanvas = document.createElement('canvas');
  exportCanvas.width = 1280;
  exportCanvas.height = 720;
  exportCtx = exportCanvas.getContext('2d');

  const canvasStream = exportCanvas.captureStream(30);

  // Conectar el audio de Flow al stream del video
  if (audioCtx) {
    if (!mediaElementSourceNode) {
      mediaElementSourceNode = audioCtx.createMediaElementSource(flowMasterAudio);
      exportAudioDest = audioCtx.createMediaStreamDestination();
      mediaElementSourceNode.connect(audioCtx.destination);
      mediaElementSourceNode.connect(exportAudioDest);
    }
    const audioTracks = exportAudioDest.stream.getAudioTracks();
    if (audioTracks.length > 0) {
      canvasStream.addTrack(audioTracks[0]);
    }
  }

  recordedChunks = [];
  const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9,opus')
    ? 'video/webm;codecs=vp9,opus'
    : 'video/webm';

  mediaRecorder = new MediaRecorder(canvasStream, { mimeType, videoBitsPerSecond: 6000000 });
  mediaRecorder.ondataavailable = (e) => {
    if (e.data && e.data.size > 0) recordedChunks.push(e.data);
  };
  mediaRecorder.onstop = () => {
    const blob = new Blob(recordedChunks, { type: 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Daniel_3_El_Horno_de_Fuego.webm';
    a.click();
  };

  isRecordingVideo = true;
  btnExportVideo.classList.add('active');
  exportIcon.textContent = '⏹️';
  exportLabel.textContent = 'Detener y Guardar';

  // Iniciar película desde el principio o desde la escena actual en modo Auto
  toggleAutoPlay(true);
  goToScene(currentSceneIndex, currentBeatIndex, true, true);
  mediaRecorder.start(200);

  function renderExportFrame() {
    if (!isRecordingVideo) return;
    const scene = STORY_SCENES[currentSceneIndex];
    const beat = scene.beats[currentBeatIndex];
    const img = preloadedSceneImages[scene.id];

    exportCtx.fillStyle = '#0d081d';
    exportCtx.fillRect(0, 0, 1280, 720);

    if (img && img.complete) {
      const elapsedScene = Math.max(0, flowMasterAudio.currentTime - scene.beats[0].audioStart);
      const zoom = 1 + Math.min(0.08, elapsedScene * 0.002);
      const dw = 1280 * zoom;
      const dh = 720 * zoom;
      const dx = (1280 - dw) / 2;
      const dy = (720 - dh) / 2;
      exportCtx.drawImage(img, dx, dy, dw, dh);
    }

    // Copiar las partículas actuales encima (sin textos ni subtítulos)
    exportCtx.drawImage(canvas, 0, 0, 1280, 720);

    exportAnimId = requestAnimationFrame(renderExportFrame);
  }

  renderExportFrame();
}

function stopVideoExport() {
  if (!isRecordingVideo) return;
  isRecordingVideo = false;
  if (exportAnimId) cancelAnimationFrame(exportAnimId);
  if (mediaRecorder && mediaRecorder.state !== 'inactive') {
    mediaRecorder.stop();
  }
  btnExportVideo.classList.remove('active');
  exportIcon.textContent = '🎬';
  exportLabel.textContent = 'Crear Video';
}

if (btnExportVideo) {
  btnExportVideo.addEventListener('click', () => {
    if (!isRecordingVideo) {
      startVideoExport();
    } else {
      stopVideoExport();
    }
  });
}

// ============================================================================
// EVENTOS E INICIALIZACIÓN
// ============================================================================
document.getElementById('btn-start-manual').addEventListener('click', () => {
  initAudio();
  coverOverlay.classList.add('hidden');
  toggleAutoPlay(false);
  goToScene(0, 0, true, true);
});

document.getElementById('btn-start-auto').addEventListener('click', () => {
  initAudio();
  coverOverlay.classList.add('hidden');
  toggleAutoPlay(true);
  goToScene(0, 0, true, true);
});

document.getElementById('btn-home').addEventListener('click', () => {
  toggleAutoPlay(false);
  stopAllVoicePlayback();
  coverOverlay.classList.remove('hidden');
});

btnNext.addEventListener('click', () => nextStep(true));
btnPrev.addEventListener('click', () => prevStep());
stageNextBtn.addEventListener('click', () => nextStep(true));
stagePrevBtn.addEventListener('click', () => prevStep());

btnReplayBeat.addEventListener('click', () => {
  playStepChime();
  renderCurrentBeat(true);
});

btnAutoplay.addEventListener('click', () => toggleAutoPlay());

btnSfx.addEventListener('click', () => {
  isSfxEnabled = !isSfxEnabled;
  btnSfx.classList.toggle('active', isSfxEnabled);
  sfxIcon.textContent = isSfxEnabled ? '🎵' : '🔕';
  if (isSfxEnabled) playStepChime();
});

btnVoice.addEventListener('click', () => {
  isVoiceEnabled = !isVoiceEnabled;
  btnVoice.classList.toggle('active', isVoiceEnabled);
  voiceIcon.textContent = isVoiceEnabled ? '🔊' : '🔇';
  if (isVoiceEnabled) {
    renderCurrentBeat(true);
  } else {
    stopAllVoicePlayback();
  }
});

// Eventos del panel de configuración de Voz del Narrador
document.getElementById('btn-voice-settings').addEventListener('click', () => {
  populateVoiceList();
  voiceSettingsPanel.classList.toggle('hidden');
});

document.getElementById('btn-close-voice-panel').addEventListener('click', () => {
  voiceSettingsPanel.classList.add('hidden');
});

voiceSelect.addEventListener('change', (e) => {
  selectedVoiceURI = e.target.value;
  if (isVoiceEnabled) {
    renderCurrentBeat(true);
  }
});

voiceRateInput.addEventListener('input', (e) => {
  voiceRate = parseFloat(e.target.value);
  voiceRateVal.textContent = `${voiceRate.toFixed(2)}x`;
  flowMasterAudio.playbackRate = voiceRate;
});

voicePitchInput.addEventListener('input', (e) => {
  voicePitch = parseFloat(e.target.value);
  voicePitchVal.textContent = voicePitch.toFixed(2);
});

voiceCharacterCheckbox.addEventListener('change', (e) => {
  isCharacterVoiceMode = e.target.checked;
});

document.getElementById('btn-test-voice').addEventListener('click', () => {
  enableAndPlayCurrentBeat();
});

const btnSubMode = document.getElementById('btn-sub-mode');
const subModeLabel = document.getElementById('sub-mode-label');

if (btnSubMode && storyAppEl) {
  btnSubMode.addEventListener('click', () => {
    const isTikTok = storyAppEl.classList.toggle('tiktok-mode');
    btnSubMode.classList.toggle('active', isTikTok);
    if (subModeLabel) {
      subModeLabel.textContent = isTikTok ? 'TikTok' : 'Caja';
    }
  });
}

function toggleStageFullscreen() {
  if (!document.fullscreenElement) {
    (stageEl || document.documentElement).requestFullscreen().catch(() => {});
  } else {
    document.exitFullscreen().catch(() => {});
  }
}

document.getElementById('btn-fullscreen').addEventListener('click', toggleStageFullscreen);
const btnStageFs = document.getElementById('btn-stage-fs');
if (btnStageFs) {
  btnStageFs.addEventListener('click', toggleStageFullscreen);
}
if (stageEl) {
  stageEl.addEventListener('dblclick', (e) => {
    if (e.target.closest('button')) return;
    toggleStageFullscreen();
  });
}

document.getElementById('btn-restart').addEventListener('click', () => {
  endingModal.classList.add('hidden');
  goToScene(0, 0, true, true);
});

document.getElementById('btn-close-ending').addEventListener('click', () => {
  endingModal.classList.add('hidden');
});

window.addEventListener('keydown', (e) => {
  if (!coverOverlay.classList.contains('hidden')) return;
  if (!endingModal.classList.contains('hidden')) return;

  if (e.key === 'ArrowRight' || e.key === ' ') {
    e.preventDefault();
    nextStep(true);
  } else if (e.key === 'ArrowLeft') {
    e.preventDefault();
    prevStep();
  }
});

// Inicializar la aplicación al cargar
buildNavigationUI();
populateVoiceList();
resizeCanvas();
goToScene(0, 0, false, false);
requestAnimationFrame(animateCanvas);

import { useState } from "react";

const plans = {
  overview: {
    label: "Overview",
    icon: "◎",
    color: "#4ade80",
  },
  diet: {
    label: "Diet Plan",
    icon: "🥗",
    color: "#34d399",
  },
  exercise: {
    label: "Exercise",
    icon: "💪",
    color: "#60a5fa",
  },
  gut: {
    label: "Gut Cleanse",
    icon: "🌿",
    color: "#a78bfa",
  },
  skin: {
    label: "Skin Care",
    icon: "✨",
    color: "#f472b6",
  },
  hair: {
    label: "Hair Care",
    icon: "🌊",
    color: "#fb923c",
  },
  smoking: {
    label: "Quit Smoking",
    icon: "🚭",
    color: "#f87171",
  },
  calendar: {
    label: "Calendar Plan",
    icon: "📅",
    color: "#facc15",
  },
};

const phaseColors = {
  "Phase 1": "#4ade80",
  "Phase 2": "#60a5fa",
  "Phase 3": "#a78bfa",
};

export default function HealthPlan() {
  const [active, setActive] = useState("overview");

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0a0f0a",
      color: "#e8f5e8",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      padding: "0",
    }}>
      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #0d1f0d 0%, #0a1a1a 50%, #0f0d1f 100%)",
        borderBottom: "1px solid #1a3a1a",
        padding: "24px 32px 0",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(20px)",
      }}>
        <div style={{ marginBottom: "8px" }}>
          <span style={{ fontSize: "11px", letterSpacing: "4px", color: "#4ade80", textTransform: "uppercase", fontFamily: "monospace" }}>
            YOUR PERSONAL HEALTH TRANSFORMATION
          </span>
        </div>
        <h1 style={{
          fontSize: "clamp(20px, 4vw, 32px)",
          fontWeight: "normal",
          margin: "0 0 20px",
          color: "#f0fdf0",
          letterSpacing: "-0.5px",
        }}>
          Complete Wellness Blueprint <span style={{ color: "#4ade80" }}>· 22M · 85kg · 5'7"</span>
        </h1>
        <div style={{ display: "flex", gap: "4px", overflowX: "auto", paddingBottom: "0", flexWrap: "nowrap" }}>
          {Object.entries(plans).map(([key, plan]) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              style={{
                background: active === key ? plan.color + "22" : "transparent",
                border: active === key ? `1px solid ${plan.color}` : "1px solid transparent",
                color: active === key ? plan.color : "#6b8c6b",
                padding: "8px 14px",
                borderRadius: "8px 8px 0 0",
                cursor: "pointer",
                fontSize: "12px",
                fontFamily: "monospace",
                letterSpacing: "0.5px",
                whiteSpace: "nowrap",
                transition: "all 0.2s",
                borderBottom: active === key ? `1px solid ${plan.color}` : "1px solid transparent",
              }}
            >
              {plan.icon} {plan.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "32px", maxWidth: "900px", margin: "0 auto" }}>
        {active === "overview" && <OverviewTab />}
        {active === "diet" && <DietTab />}
        {active === "exercise" && <ExerciseTab />}
        {active === "gut" && <GutTab />}
        {active === "skin" && <SkinTab />}
        {active === "hair" && <HairTab />}
        {active === "smoking" && <SmokingTab />}
        {active === "calendar" && <CalendarTab />}
      </div>
    </div>
  );
}

function SectionTitle({ title, subtitle, color = "#4ade80" }) {
  return (
    <div style={{ marginBottom: "28px" }}>
      <div style={{ width: "40px", height: "2px", background: color, marginBottom: "12px" }} />
      <h2 style={{ fontSize: "24px", fontWeight: "normal", margin: "0 0 6px", color: "#f0fdf0" }}>{title}</h2>
      {subtitle && <p style={{ fontSize: "13px", color: "#6b8c6b", margin: 0, fontFamily: "monospace" }}>{subtitle}</p>}
    </div>
  );
}

function Card({ children, accent = "#4ade80", style = {} }) {
  return (
    <div style={{
      background: "#0d1f0d",
      border: `1px solid ${accent}22`,
      borderLeft: `3px solid ${accent}`,
      borderRadius: "8px",
      padding: "20px",
      marginBottom: "16px",
      ...style,
    }}>
      {children}
    </div>
  );
}

function Tag({ text, color = "#4ade80" }) {
  return (
    <span style={{
      background: color + "18",
      color: color,
      border: `1px solid ${color}44`,
      borderRadius: "4px",
      padding: "2px 8px",
      fontSize: "11px",
      fontFamily: "monospace",
      marginRight: "6px",
      marginBottom: "4px",
      display: "inline-block",
    }}>{text}</span>
  );
}

function PhaseBlock({ phase, weeks, color, children }) {
  return (
    <div style={{
      background: color + "08",
      border: `1px solid ${color}33`,
      borderRadius: "10px",
      padding: "20px",
      marginBottom: "20px",
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
        <span style={{ background: color, color: "#0a0f0a", borderRadius: "4px", padding: "2px 10px", fontSize: "12px", fontFamily: "monospace", fontWeight: "bold" }}>{phase}</span>
        <span style={{ color: color, fontSize: "12px", fontFamily: "monospace" }}>{weeks}</span>
      </div>
      {children}
    </div>
  );
}

function Bullet({ text, color = "#4ade80", sub }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "10px", alignItems: "flex-start" }}>
      <span style={{ color, marginTop: "2px", flexShrink: 0 }}>▸</span>
      <div>
        <span style={{ fontSize: "14px", color: "#d4edd4", lineHeight: "1.5" }}>{text}</span>
        {sub && <div style={{ fontSize: "12px", color: "#6b8c6b", fontFamily: "monospace", marginTop: "2px" }}>{sub}</div>}
      </div>
    </div>
  );
}

function MealRow({ time, meal, notes }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "100px 1fr",
      gap: "16px",
      padding: "12px 0",
      borderBottom: "1px solid #1a3a1a",
      alignItems: "start",
    }}>
      <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#4ade80", paddingTop: "2px" }}>{time}</span>
      <div>
        <div style={{ fontSize: "14px", color: "#d4edd4", marginBottom: "3px" }}>{meal}</div>
        {notes && <div style={{ fontSize: "12px", color: "#6b8c6b" }}>{notes}</div>}
      </div>
    </div>
  );
}

// ─── OVERVIEW ──────────────────────────────────────────────
function OverviewTab() {
  const stats = [
    { label: "Current BMI", value: "29.1", unit: "Overweight", color: "#f87171" },
    { label: "Target BMI", value: "22–24", unit: "Normal Range", color: "#4ade80" },
    { label: "Target Weight", value: "68–72 kg", unit: "~13–17kg loss", color: "#60a5fa" },
    { label: "Timeline", value: "6–9 mo", unit: "Sustainable pace", color: "#a78bfa" },
  ];

  return (
    <div>
      <SectionTitle title="Your Health Snapshot" subtitle="STARTING POINT · JUNE 2026" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "12px", marginBottom: "32px" }}>
        {stats.map(s => (
          <div key={s.label} style={{
            background: s.color + "0a",
            border: `1px solid ${s.color}33`,
            borderRadius: "10px",
            padding: "18px",
            textAlign: "center",
          }}>
            <div style={{ fontSize: "11px", fontFamily: "monospace", color: s.color, marginBottom: "6px", letterSpacing: "1px" }}>{s.label}</div>
            <div style={{ fontSize: "22px", color: "#f0fdf0", marginBottom: "4px" }}>{s.value}</div>
            <div style={{ fontSize: "11px", color: "#6b8c6b" }}>{s.unit}</div>
          </div>
        ))}
      </div>

      <Card accent="#f87171">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#f87171", marginBottom: "10px", letterSpacing: "1px" }}>ROOT CAUSE ANALYSIS</div>
        <p style={{ fontSize: "14px", color: "#d4edd4", lineHeight: "1.7", margin: "0 0 10px" }}>
          Your core issue is a <strong style={{ color: "#f0fdf0" }}>compounding inflammation cycle</strong> — smoking + spicy/processed food + poor sleep + sedentary lifestyle = gut damage → brain fog → low motivation → worse habits. Everything in this plan is designed to break that loop systematically.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          <Tag text="Gut Dysbiosis" color="#f87171" />
          <Tag text="Chronic Inflammation" color="#fb923c" />
          <Tag text="Oxidative Stress (Smoking)" color="#facc15" />
          <Tag text="Hormonal Disruption" color="#a78bfa" />
          <Tag text="Poor Nutrient Absorption" color="#60a5fa" />
        </div>
      </Card>

      <div style={{ fontSize: "13px", fontFamily: "monospace", color: "#4ade80", marginBottom: "16px", letterSpacing: "2px" }}>3-PHASE TRANSFORMATION ROADMAP</div>

      {[
        { phase: "Phase 1", weeks: "Weeks 1–4", color: "#4ade80", title: "Repair & Reset", desc: "Gut healing, habit building, body getting used to movement. No aggressive dieting. Reduce smoking." },
        { phase: "Phase 2", weeks: "Weeks 5–16", color: "#60a5fa", title: "Build & Burn", desc: "Progressive strength training, structured caloric deficit, skin/hair routine locked in. Smoking minimal." },
        { phase: "Phase 3", weeks: "Weeks 17+", color: "#a78bfa", title: "Optimise & Sustain", desc: "Performance gains, BMI normalised, gut fully healed, smoking-free target, supplement tapering begins." },
      ].map(p => (
        <div key={p.phase} style={{
          display: "flex", gap: "16px", padding: "14px 0", borderBottom: "1px solid #1a3a1a", alignItems: "flex-start"
        }}>
          <span style={{ background: p.color, color: "#0a0f0a", borderRadius: "4px", padding: "2px 10px", fontSize: "11px", fontFamily: "monospace", whiteSpace: "nowrap", fontWeight: "bold" }}>{p.phase}</span>
          <div>
            <div style={{ fontSize: "14px", color: "#f0fdf0", marginBottom: "3px" }}>{p.title} <span style={{ color: p.color, fontSize: "12px" }}>· {p.weeks}</span></div>
            <div style={{ fontSize: "13px", color: "#6b8c6b" }}>{p.desc}</div>
          </div>
        </div>
      ))}

      <Card accent="#4ade80" style={{ marginTop: "24px" }}>
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#4ade80", marginBottom: "10px" }}>⚡ THE ONE RULE</div>
        <p style={{ fontSize: "15px", color: "#f0fdf0", margin: 0, lineHeight: "1.6" }}>
          "Don't try to be perfect. Try to be <em>consistent</em>. 70% compliance with this plan beats 100% compliance for 2 weeks then quitting."
        </p>
      </Card>
    </div>
  );
}

// ─── DIET ──────────────────────────────────────────────────
function DietTab() {
  const [day, setDay] = useState("weekday");
  return (
    <div>
      <SectionTitle title="Vegetarian Diet Plan" subtitle="~1,800 KCAL · HIGH PROTEIN · ANTI-INFLAMMATORY · GUT-FRIENDLY" color="#34d399" />

      <Card accent="#f87171">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#f87171", marginBottom: "8px" }}>AVOID COMPLETELY (First 4 weeks)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {["Maida/White flour", "Fried food", "Packaged chips/snacks", "Cold drinks/soda", "Excess sugar", "Very spicy food", "Paneer overdose", "Late night eating"].map(t => (
            <Tag key={t} text={t} color="#f87171" />
          ))}
        </div>
      </Card>

      <Card accent="#4ade80">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#4ade80", marginBottom: "8px" }}>HERO FOODS — Eat these daily</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {["Moong dal", "Dahi/Curd", "Cucumber", "Lauki/Bottle gourd", "Banana", "Oats", "Jeera", "Ginger", "Flaxseed", "Amla", "Sprouts", "Eggs (if ok)", "Sattu"].map(t => (
            <Tag key={t} text={t} color="#4ade80" />
          ))}
        </div>
      </Card>

      <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
        {["weekday", "weekend"].map(d => (
          <button key={d} onClick={() => setDay(d)} style={{
            background: day === d ? "#34d39922" : "transparent",
            border: day === d ? "1px solid #34d399" : "1px solid #1a3a1a",
            color: day === d ? "#34d399" : "#6b8c6b",
            padding: "6px 16px", borderRadius: "6px", cursor: "pointer", fontFamily: "monospace", fontSize: "12px",
          }}>{d === "weekday" ? "Weekday Plan" : "Weekend Plan"}</button>
        ))}
      </div>

      {day === "weekday" ? (
        <Card accent="#34d399">
          <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#34d399", marginBottom: "12px" }}>WEEKDAY MEAL TEMPLATE</div>
          <MealRow time="6:30 AM" meal="Wake-up ritual: Warm water + ½ lemon + pinch jeera" notes="Alkalises gut, kickstarts digestion. Before brushing." />
          <MealRow time="7:00 AM" meal="Breakfast: Oats porridge (½ cup) + banana + 5 soaked almonds + 2 walnuts" notes="~350 kcal | Complex carbs + healthy fats + potassium" />
          <MealRow time="10:00 AM" meal="Mid-morning: 1 cup curd (plain, unsweetened) + 1 fruit (papaya/apple/pear)" notes="~150 kcal | Probiotic + fibre" />
          <MealRow time="1:00 PM" meal="Lunch: 2 multigrain rotis + 1 bowl moong/masoor dal + 1 sabzi (light) + salad" notes="~500 kcal | Keep spice medium, use jeera tadka" />
          <MealRow time="4:00 PM" meal="Evening snack: Sattu sharbat (2 tbsp sattu + water + lemon) OR roasted chana" notes="~120 kcal | Best pre-workout fuel" />
          <MealRow time="7:30 PM" meal="Post-workout dinner: Moong dal khichdi OR paneer bhurji (no oil) + 1 roti" notes="~400 kcal | Protein-first meal" />
          <MealRow time="9:30 PM" meal="Night ritual: Warm turmeric milk (low fat) OR jeera water" notes="Anti-inflammatory, aids sleep + digestion. Stop eating after this." />
        </Card>
      ) : (
        <Card accent="#34d399">
          <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#34d399", marginBottom: "12px" }}>WEEKEND MEAL TEMPLATE (Slightly relaxed)</div>
          <MealRow time="7:30 AM" meal="Wake-up: Warm water + lemon + ginger" notes="" />
          <MealRow time="8:30 AM" meal="Breakfast: Moong dal cheela (2–3) + green chutney + curd" notes="~380 kcal | High protein, gut-friendly" />
          <MealRow time="11:00 AM" meal="Brunch snack: Sprout chaat (no tamarind, light spice)" notes="~160 kcal | Gut-healing fibre + protein" />
          <MealRow time="1:30 PM" meal="Lunch: Can have 1 cheat item — but pair it with salad + curd" notes="~550 kcal | One indulgence per week allowed here" />
          <MealRow time="4:00 PM" meal="Pre-workout: Banana + peanut butter (1 tsp)" notes="~180 kcal" />
          <MealRow time="7:00 PM" meal="Post-workout dinner: Vegetable soup + 2 rotis + sabzi" notes="~400 kcal | Light & digestive" />
          <MealRow time="9:30 PM" meal="Night: Warm turmeric milk" notes="" />
        </Card>
      )}

      <Card accent="#a78bfa">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#a78bfa", marginBottom: "10px" }}>MINIMAL SUPPLEMENTS (Phase 1 only, taper by Phase 3)</div>
        <Bullet color="#a78bfa" text="Vitamin B12 — 500mcg daily (critical for vegetarians + smokers)" sub="Can stop supplement by Month 6 if diet is consistent — get tested" />
        <Bullet color="#a78bfa" text="Vitamin D3 — 1000 IU daily (morning with food)" sub="Get 15 mins sunlight daily → eventually stop supplement" />
        <Bullet color="#a78bfa" text="Probiotics — Plain home curd daily (food-first, no capsule needed)" sub="Only add capsule probiotic if gut doesn't improve in 6 weeks" />
        <div style={{ fontSize: "12px", color: "#6b8c6b", marginTop: "8px", fontFamily: "monospace" }}>
          ⚠ No protein powder, no fat burners, no multivitamin cocktails. Food first always.
        </div>
      </Card>

      <Card accent="#facc15">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#facc15", marginBottom: "8px" }}>HYDRATION PROTOCOL</div>
        <Bullet color="#facc15" text="3–3.5 litres of water daily — track it" />
        <Bullet color="#facc15" text="Replace 1 tea/coffee with jeera or ajwain water (helps acidity massively)" />
        <Bullet color="#facc15" text="No cold water — always room temp or warm (especially morning)" />
        <Bullet color="#facc15" text="Stop drinking water 30 mins before and after meals" sub="Dilutes digestive enzymes — major cause of your bloating" />
      </Card>
    </div>
  );
}

// ─── EXERCISE ──────────────────────────────────────────────
function ExerciseTab() {
  const schedule = [
    { day: "Monday", type: "Strength", duration: "55 min", focus: "Upper Body Push", color: "#60a5fa", exercises: ["Bench press / DB press 3×10", "Shoulder press 3×10", "Lateral raises 3×12", "Tricep pushdown 3×12", "Plank 3×45s"] },
    { day: "Tuesday", type: "Cardio + Core", duration: "45 min", focus: "Fat Burn + Abs", color: "#34d399", exercises: ["10 min brisk walk warmup", "20 min moderate treadmill / elliptical", "Crunches 3×20", "Leg raises 3×15", "Dead bugs 3×10"] },
    { day: "Wednesday", type: "Strength", duration: "55 min", focus: "Lower Body", color: "#60a5fa", exercises: ["Squats 3×10", "Leg press 3×12", "Lunges 3×10 each", "Leg curl 3×12", "Calf raises 3×15"] },
    { day: "Thursday", type: "Active Recovery", duration: "30 min", focus: "Morning Walk + Mobility", color: "#6b8c6b", exercises: ["20 min outdoor walk (7 AM)", "10 min full body stretch", "Deep breathing 5 min"] },
    { day: "Friday", type: "Strength", duration: "55 min", focus: "Upper Body Pull", color: "#60a5fa", exercises: ["Lat pulldown 3×10", "Seated row 3×10", "Dumbbell curls 3×12", "Face pulls 3×15", "Reverse flyes 3×12"] },
    { day: "Saturday", type: "Full Body + Cardio", duration: "90 min", focus: "Compound Movements", color: "#a78bfa", exercises: ["Deadlift or Romanian DL 3×8", "Push-ups 3×15", "Pull-ups / Assisted 3×8", "Goblet squats 3×12", "30 min moderate cardio"] },
    { day: "Sunday", type: "Rest & Reset", duration: "—", focus: "Review + Walk", color: "#1a3a1a", exercises: ["Weekly health review (10 AM)", "30 min leisure walk", "Meal prep for week"] },
  ];

  return (
    <div>
      <SectionTitle title="Exercise Routine" subtitle="MORNING GYM · 7:00 AM DAILY · <1HR WEEKDAY · <1.5HR WEEKEND" color="#60a5fa" />

      <Card accent="#f87171">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#f87171", marginBottom: "8px" }}>⚠ PHASE 1 RULE (Weeks 1–4)</div>
        <p style={{ fontSize: "14px", color: "#d4edd4", margin: 0 }}>Start with 60–70% of listed weights. Your body is sedentary. Injury now = months lost. Form over ego. Add weight weekly, not daily.</p>
      </Card>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {schedule.map(s => (
          <div key={s.day} style={{
            background: s.color + "08",
            border: `1px solid ${s.color}33`,
            borderRadius: "8px",
            padding: "14px 18px",
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
              <div>
                <span style={{ fontSize: "15px", color: "#f0fdf0" }}>{s.day}</span>
                <span style={{ fontSize: "12px", color: s.color, fontFamily: "monospace", marginLeft: "10px" }}>{s.type} · {s.focus}</span>
              </div>
              <Tag text={s.duration} color={s.color} />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {s.exercises.map(e => (
                <span key={e} style={{ fontSize: "12px", color: "#8ab48a", background: "#0d1f0d", border: "1px solid #1a3a1a", borderRadius: "4px", padding: "3px 8px" }}>{e}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Card accent="#4ade80" style={{ marginTop: "20px" }}>
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#4ade80", marginBottom: "10px" }}>PROGRESSIVE OVERLOAD PLAN</div>
        <Bullet color="#4ade80" text="Phase 1 (Wk 1–4): Master form, 60–70% load, 3 sets" />
        <Bullet color="#60a5fa" text="Phase 2 (Wk 5–16): Add 2.5kg every 2 weeks, 4 sets, add supersets" />
        <Bullet color="#a78bfa" text="Phase 3 (Wk 17+): Heavy compound focus, drop sets, HIIT cardio" />
      </Card>

      <Card accent="#facc15">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#facc15", marginBottom: "8px" }}>BRAIN FOG BUSTER</div>
        <p style={{ fontSize: "14px", color: "#d4edd4", margin: "0 0 10px" }}>Resistance training is clinically proven to reduce brain fog and improve mental clarity within 4–6 weeks. The gym is your therapy here — it forces neuroplasticity, increases BDNF, and resets dopamine circuits damaged by smoking.</p>
        <Bullet color="#facc15" text="Always train in the evening (post-work) to capitalise on cortisol dip" />
        <Bullet color="#facc15" text="No music with lyrics for first 10 min — ambient/binaural beats build focus" />
      </Card>
    </div>
  );
}

// ─── GUT ──────────────────────────────────────────────────
function GutTab() {
  return (
    <div>
      <SectionTitle title="Gut Cleansing Protocol" subtitle="12-WEEK REPAIR PLAN · CONSTIPATION · ACIDITY · BLOATING" color="#a78bfa" />

      <Card accent="#f87171">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#f87171", marginBottom: "8px" }}>YOUR GUT SITUATION</div>
        <p style={{ fontSize: "14px", color: "#d4edd4", lineHeight: "1.7", margin: 0 }}>
          5 years of smoking has damaged your gut lining and killed beneficial bacteria. This causes the constipation-acidity-bloating triad. Your gut can fully heal, but it takes 3–6 months of consistent action. Smoking reduction is <em>non-negotiable</em> for gut healing.
        </p>
      </Card>

      <PhaseBlock phase="Phase 1" weeks="Weeks 1–4: Soothe & Stabilise" color="#4ade80">
        <Bullet color="#4ade80" text="Morning ritual: Warm water + lemon + pinch of ajwain seeds (chew and swallow)" sub="Do this before brushing, fasted — best gut reset available" />
        <Bullet color="#4ade80" text="Eat at fixed times — gut works on a clock. Irregular eating = chronic bloating" />
        <Bullet color="#4ade80" text="Add 1 tbsp isabgol (psyllium husk) in warm water at night" sub="Takes 3–5 days to show effect. Best natural constipation fix." />
        <Bullet color="#4ade80" text="Remove excess spice — replace with ginger + cumin + coriander for flavour" />
        <Bullet color="#4ade80" text="1 bowl curd daily (plain, room temp — NOT cold from fridge)" sub="Restores gut bacteria. Cold curd worsens acidity." />
        <Bullet color="#4ade80" text="Chew food 20–25 times per bite. Digestion starts in the mouth." />
      </PhaseBlock>

      <PhaseBlock phase="Phase 2" weeks="Weeks 5–8: Rebuild the Microbiome" color="#60a5fa">
        <Bullet color="#60a5fa" text="Introduce fermented foods: buttermilk (chaas), kanji, homemade curd, idli/dosa" />
        <Bullet color="#60a5fa" text="Add prebiotic foods: bananas, garlic, onions, oats — these feed good bacteria" />
        <Bullet color="#60a5fa" text="Aloe vera juice (2 tbsp) in water, 30 min before lunch" sub="Heals acid-damaged gut lining. Stop if you get loose stools." />
        <Bullet color="#60a5fa" text="Triphala churna — ½ tsp in warm water at night (weeks 5–12 only)" sub="Ayurvedic gut cleanser. Reduces constipation and inflammation." />
        <Bullet color="#60a5fa" text="Reduce tea/coffee to 1 cup max, after food — not empty stomach" />
      </PhaseBlock>

      <PhaseBlock phase="Phase 3" weeks="Weeks 9–12: Optimise & Lock In" color="#a78bfa">
        <Bullet color="#a78bfa" text="Bowel movement should now be daily and easy — if not, something in your diet is off" />
        <Bullet color="#a78bfa" text="Acidity should have reduced 60–70% — evaluate any remaining trigger foods" />
        <Bullet color="#a78bfa" text="Taper isabgol — try stopping for a week to test gut independence" />
        <Bullet color="#a78bfa" text="Continue fermented food daily — this is now permanent lifestyle" />
        <Bullet color="#a78bfa" text="Add 2 tbsp flaxseed (ground) to food daily — omega-3 + fibre combo" />
      </PhaseBlock>

      <Card accent="#facc15">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#facc15", marginBottom: "8px" }}>ACIDITY EMERGENCY TOOLKIT</div>
        <Bullet color="#facc15" text="Cold milk (1 small glass) — immediate acidity relief, better than antacids" />
        <Bullet color="#facc15" text="Saunf (fennel) — chew 1 tsp after every meal, always" />
        <Bullet color="#facc15" text="Coconut water — instant alkalising effect" />
        <Bullet color="#facc15" text="Never lie down within 2 hrs of eating — elevate head when sleeping" />
        <div style={{ fontSize: "12px", color: "#6b8c6b", marginTop: "8px" }}>⚠ If acidity is severe or you see blood, see a gastroenterologist — could be GERD.</div>
      </Card>
    </div>
  );
}

// ─── SKIN ──────────────────────────────────────────────────
function SkinTab() {
  return (
    <div>
      <SectionTitle title="Skincare Routine" subtitle="ACNE · OILY SKIN · DULL COMPLEXION · INSIDE-OUT APPROACH" color="#f472b6" />

      <Card accent="#f87171">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#f87171", marginBottom: "8px" }}>WHY YOUR SKIN IS SUFFERING</div>
        <p style={{ fontSize: "14px", color: "#d4edd4", lineHeight: "1.7", margin: 0 }}>
          Smoking reduces collagen by 40%, constricts blood vessels (less oxygen to skin), and causes oxidative stress. Combined with gut issues (leaky gut toxins show on skin), high spice intake (inflammation), and poor hydration — your skin is fighting on 4 fronts. Diet + gut healing will fix 60% of this. The rest is your routine.
        </p>
      </Card>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "16px" }}>
        <Card accent="#f472b6" style={{ margin: 0 }}>
          <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#f472b6", marginBottom: "10px" }}>☀ MORNING ROUTINE (5 min)</div>
          <Bullet color="#f472b6" text="Rinse face with cold water (no soap AM)" />
          <Bullet color="#f472b6" text="Vitamin C serum (few drops, pat gently)" sub="Brightens dullness, fights oxidative damage from smoking" />
          <Bullet color="#f472b6" text="Lightweight gel moisturiser (oil-free)" />
          <Bullet color="#f472b6" text="SPF 30+ sunscreen (non-negotiable, daily)" sub="Unprotected sun = worse pigmentation + acne marks" />
        </Card>
        <Card accent="#fb923c" style={{ margin: 0 }}>
          <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#fb923c", marginBottom: "10px" }}>🌙 NIGHT ROUTINE (7 min)</div>
          <Bullet color="#fb923c" text="Face wash with salicylic acid face wash (oily/acne skin)" sub="2% SA — use once daily (night only)" />
          <Bullet color="#fb923c" text="Niacinamide 10% serum" sub="Controls oil, reduces acne, fades marks. King for your skin type." />
          <Bullet color="#fb923c" text="Light moisturiser (even oily skin needs it)" />
          <Bullet color="#fb923c" text="Spot treatment on active acne (benzoyl peroxide 2.5%)" />
        </Card>
      </div>

      <Card accent="#a78bfa">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#a78bfa", marginBottom: "10px" }}>WEEKLY TREATMENTS (2× per week)</div>
        <Bullet color="#a78bfa" text="Clay mask (multani mitti + rose water) — 20 min, twice a week" sub="Deep cleans pores, reduces oil, cools inflammation" />
        <Bullet color="#a78bfa" text="Exfoliate with gentle BHA or rice flour once a week" sub="Don't over-exfoliate — damages skin barrier" />
      </Card>

      <Card accent="#4ade80">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#4ade80", marginBottom: "10px" }}>INSIDE-OUT SKIN PROTOCOL</div>
        <Bullet color="#4ade80" text="Amla (Indian gooseberry) daily — raw, juice, or candy form" sub="Highest natural Vitamin C — reverses smoking's skin damage" />
        <Bullet color="#4ade80" text="3L+ water daily — non-negotiable for skin clarity" />
        <Bullet color="#4ade80" text="Cut sugar — sugar causes glycation which ages skin rapidly" />
        <Bullet color="#4ade80" text="Add 1 tsp flaxseed oil to food — omega-3 reduces skin inflammation" />
        <Bullet color="#4ade80" text="Sweat daily (gym!) — exercise literally detoxes skin through sweat" />
      </Card>

      <Card accent="#facc15">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#facc15", marginBottom: "8px" }}>PRODUCT PICKS (Budget-Friendly, India)</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {["Minimalist Niacinamide 10%", "Minimalist Vit C 10%", "CeraVe Moisturiser", "Neutrogena Oil-Free SPF", "Himalaya SA Face Wash", "Lotus Herbals SPF 40"].map(p => (
            <Tag key={p} text={p} color="#facc15" />
          ))}
        </div>
      </Card>
    </div>
  );
}

// ─── HAIR ──────────────────────────────────────────────────
function HairTab() {
  return (
    <div>
      <SectionTitle title="Hair Care Routine" subtitle="HAIRFALL · THINNING · SCALP HEALTH · NUTRITIONAL APPROACH" color="#fb923c" />

      <Card accent="#f87171">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#f87171", marginBottom: "8px" }}>WHY YOUR HAIR IS FALLING</div>
        <p style={{ fontSize: "14px", color: "#d4edd4", lineHeight: "1.7", margin: 0 }}>
          At 22, the primary culprits are: <strong style={{ color: "#f0fdf0" }}>(1) Nutritional deficiency</strong> — B12, D3, Iron, Zinc all low in smoker vegetarians. <strong style={{ color: "#f0fdf0" }}>(2) Smoking</strong> — restricts scalp blood flow, kills hair follicles. <strong style={{ color: "#f0fdf0" }}>(3) Chronic stress + brain fog</strong> — cortisol triggers telogen effluvium (mass shedding). Fix the root causes, the hair follows.
        </p>
      </Card>

      <Card accent="#fb923c">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#fb923c", marginBottom: "10px" }}>SCALP OIL MASSAGE PROTOCOL (3× per week)</div>
        <Bullet color="#fb923c" text="Oil blend: Coconut oil (base) + 5 drops rosemary essential oil" sub="Rosemary oil is clinically as effective as minoxidil for hair growth" />
        <Bullet color="#fb923c" text="Warm the oil slightly — massage into scalp for 10 minutes" sub="Circular fingertip pressure — stimulates blood flow to follicles" />
        <Bullet color="#fb923c" text="Leave for 1–2 hours OR overnight, then wash off" />
        <Bullet color="#fb923c" text="Do this Mon, Wed, Sat — track for 90 days" />
      </Card>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "16px" }}>
        <Card accent="#34d399" style={{ margin: 0 }}>
          <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#34d399", marginBottom: "10px" }}>WASH ROUTINE</div>
          <Bullet color="#34d399" text="Wash 2–3× per week max" sub="Over-washing strips protective oils" />
          <Bullet color="#34d399" text="Use sulphate-free shampoo" />
          <Bullet color="#34d399" text="Cold/lukewarm water only" sub="Hot water damages follicles" />
          <Bullet color="#34d399" text="Condition mid-lengths to ends only" />
          <Bullet color="#34d399" text="Pat dry, don't rub" />
        </Card>
        <Card accent="#60a5fa" style={{ margin: 0 }}>
          <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#60a5fa", marginBottom: "10px" }}>HAIR FOODS</div>
          <Bullet color="#60a5fa" text="Pumpkin seeds (zinc + iron)" sub="30g daily — best vegetarian hair food" />
          <Bullet color="#60a5fa" text="Walnuts + flaxseed (omega-3)" />
          <Bullet color="#60a5fa" text="Spinach + rajma (iron)" />
          <Bullet color="#60a5fa" text="Amla — daily (natural B5 + C)" />
          <Bullet color="#60a5fa" text="Biotin-rich: oats, almonds, avocado" />
        </Card>
      </div>

      <Card accent="#a78bfa">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#a78bfa", marginBottom: "10px" }}>WEEKLY HAIR MASK (Once a week)</div>
        <Bullet color="#a78bfa" text="Egg + curd + 1 tsp honey mask" sub="Apply to scalp + hair, 30 min, wash off. Protein treatment." />
        <Bullet color="#a78bfa" text="Onion juice mask (alternate weeks)" sub="High sulphur — proven to regrow hair in 6–8 weeks. Smells strong but works." />
      </Card>

      <Card accent="#facc15">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#facc15", marginBottom: "8px" }}>TIMELINE REALITY CHECK</div>
        <Bullet color="#facc15" text="Month 1–2: Shedding slows down (diet + oil massage working)" />
        <Bullet color="#facc15" text="Month 3–4: Baby hairs appear at hairline — this is regrowth" />
        <Bullet color="#facc15" text="Month 6: Visible improvement in density" sub="Hair growth is slow. Consistency over 6 months is the only way." />
        <div style={{ fontSize: "12px", color: "#6b8c6b", marginTop: "8px" }}>⚠ If hairfall is aggressive (>150 strands/day), get blood work: ferritin, B12, D3, TSH</div>
      </Card>
    </div>
  );
}

// ─── SMOKING ──────────────────────────────────────────────
function SmokingTab() {
  return (
    <div>
      <SectionTitle title="Quit Smoking Plan" subtitle="GRADUAL REDUCTION PROTOCOL · NO COLD TURKEY · SUSTAINABLE" color="#f87171" />

      <Card accent="#4ade80">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#4ade80", marginBottom: "8px" }}>GOOD NEWS FIRST</div>
        <p style={{ fontSize: "14px", color: "#d4edd4", lineHeight: "1.7", margin: 0 }}>
          You've already quit alcohol — which required the same dopamine rewiring. You have proof you can do this. Smoking cessation at 22 means your lung function fully recovers within 1–2 years. Your gut healing, skin clearing, and hair regrowth all <strong style={{ color: "#f0fdf0" }}>accelerate dramatically</strong> the moment you reduce smoking.
        </p>
      </Card>

      <PhaseBlock phase="Phase 1" weeks="Weeks 1–4: Awareness" color="#4ade80">
        <Bullet color="#4ade80" text="Track every cigarette — time, trigger, mood" sub="Use Notes app. This reveals your pattern, not to judge you." />
        <Bullet color="#4ade80" text="Set a daily limit: max 5 cigarettes/day (if currently at 7–10)" />
        <Bullet color="#4ade80" text="Delay first cigarette by 30 min each week" sub="Week 1: no cig before 9am. Week 2: no cig before 10am." />
        <Bullet color="#4ade80" text="Replace 1 cig/day with: deep breathing (4-7-8 technique)" sub="Inhale 4s, hold 7s, exhale 8s — activates same calming response" />
        <Bullet color="#4ade80" text="Chew on cardamom/fennel when craving hits" />
      </PhaseBlock>

      <PhaseBlock phase="Phase 2" weeks="Weeks 5–10: Reduction" color="#60a5fa">
        <Bullet color="#60a5fa" text="Max 3 cigarettes/day — no negotiation" />
        <Bullet color="#60a5fa" text="No smoking after gym — use this natural high instead" sub="Post-workout endorphins are neurologically similar to nicotine hit" />
        <Bullet color="#60a5fa" text="Identify and break location habits (balcony cig, tea cig, etc.)" sub="Change the environment → breaks the trigger loop" />
        <Bullet color="#60a5fa" text="Replace weed sessions with: music + cold shower + journaling" sub="Weed + tobacco combo is hardest to quit — address them separately" />
      </PhaseBlock>

      <PhaseBlock phase="Phase 3" weeks="Weeks 11–24: Quit" color="#a78bfa">
        <Bullet color="#a78bfa" text="Target: 1 cigarette/day or less by week 12" />
        <Bullet color="#a78bfa" text="Set a Quit Date — make it meaningful (birthday, a Sunday, a new month)" />
        <Bullet color="#a78bfa" text="Tell 2 people you trust — accountability matters" />
        <Bullet color="#a78bfa" text="Week of quit date: intensify gym, add walks, keep hands busy" />
        <Bullet color="#a78bfa" text="After quitting: your gym performance jumps within 2 weeks (more oxygen)" />
      </PhaseBlock>

      <Card accent="#facc15">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#facc15", marginBottom: "8px" }}>CRAVING SURVIVAL KIT</div>
        <Bullet color="#facc15" text="Craving lasts 3–5 minutes max. Outlast it." />
        <Bullet color="#facc15" text="Cold water + deep breaths — immediate craving reducer" />
        <Bullet color="#facc15" text="Step outside for 5 min walk (not to smoke — to walk it out)" />
        <Bullet color="#facc15" text="Clove — chew one. Strong taste kills nicotine urge." />
        <div style={{ fontSize: "12px", color: "#6b8c6b", marginTop: "8px" }}>No NRT patches/gums recommended at this stage — your count is manageable with behavioural change first.</div>
      </Card>
    </div>
  );
}

// ─── CALENDAR ──────────────────────────────────────────────
function CalendarTab() {
  const weekday = [
    { time: "5:30 AM", task: "Wake-up", desc: "Alarm — no snooze rule", icon: "⏰" },
    { time: "5:35 AM", task: "Wake-up Gut Ritual", desc: "Warm water + lemon + jeera (before brushing)", icon: "💧" },
    { time: "6:00 AM", task: "Pre-Gym Breakfast", desc: "Oats + banana + almonds (45 min before gym)", icon: "🥣" },
    { time: "7:00 AM", task: "GYM 💪", desc: "Morning session — 55 min weekday / 90 min Sat", icon: "💪" },
    { time: "8:00 AM", task: "Post-Gym Meal", desc: "High-protein breakfast within 45 min of gym", icon: "🥗" },
    { time: "10:30 AM", task: "Mid-Morning Snack", desc: "Curd + fruit / roasted chana", icon: "🍎" },
    { time: "1:00 PM", task: "Lunch", desc: "Dal + 2 rotis + sabzi + salad", icon: "🥘" },
    { time: "4:00 PM", task: "Snack + Hydration Check", desc: "Makhana / coconut water / jeera water", icon: "💧" },
    { time: "7:30 PM", task: "Dinner", desc: "Light protein-first meal — finish by 8 PM", icon: "🍽" },
    { time: "9:30 PM", task: "Night Ritual", desc: "Isabgol + skincare + turmeric milk", icon: "🌙" },
    { time: "10:30 PM", task: "Lights Out", desc: "7.5–8 hrs sleep = your real gains happen here", icon: "😴" },
  ];

  const calEvents = [
    { day: "Every Day", event: "Wake-up gut ritual (5:35 AM)", color: "#4ade80" },
    { day: "Mon/Wed/Fri", event: "GYM — Strength (7:00–7:55 AM)", color: "#60a5fa" },
    { day: "Tue", event: "GYM — Cardio + Core (7:00–7:45 AM)", color: "#34d399" },
    { day: "Thu", event: "Active Recovery Walk (7:00–7:30 AM)", color: "#6b8c6b" },
    { day: "Fri", event: "GYM — Pull session (7:00–7:55 AM)", color: "#60a5fa" },
    { day: "Sat", event: "GYM — Full Body + Cardio (7:00–8:30 AM)", color: "#a78bfa" },
    { day: "Sun", event: "Weekly review + rest walk (10:00 AM)", color: "#facc15" },
    { day: "Mon/Wed/Sat", event: "Hair oil massage (9:00 PM)", color: "#fb923c" },
    { day: "Tue/Fri", event: "Face clay mask (9:00 PM)", color: "#f472b6" },
    { day: "Every Night", event: "Night ritual — gut + skincare (9:30 PM)", color: "#a78bfa" },
  ];

  return (
    <div>
      <SectionTitle title="Daily Schedule & Calendar Setup" subtitle="MERGE INTO GOOGLE CALENDAR · RECURRING EVENTS" color="#facc15" />

      <Card accent="#4ade80">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#4ade80", marginBottom: "12px" }}>IDEAL WEEKDAY TIMELINE</div>
        {weekday.map(w => (
          <div key={w.time} style={{ display: "flex", gap: "14px", padding: "8px 0", borderBottom: "1px solid #1a3a1a", alignItems: "center" }}>
            <span style={{ fontSize: "11px", fontFamily: "monospace", color: "#4ade80", width: "70px", flexShrink: 0 }}>{w.time}</span>
            <span style={{ fontSize: "16px", flexShrink: 0 }}>{w.icon}</span>
            <div>
              <div style={{ fontSize: "13px", color: "#f0fdf0" }}>{w.task}</div>
              <div style={{ fontSize: "11px", color: "#6b8c6b" }}>{w.desc}</div>
            </div>
          </div>
        ))}
      </Card>

      <div style={{ fontSize: "13px", fontFamily: "monospace", color: "#facc15", marginBottom: "14px", letterSpacing: "1px" }}>GOOGLE CALENDAR RECURRING EVENTS TO CREATE</div>

      <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "24px" }}>
        {calEvents.map((e, i) => (
          <div key={i} style={{
            display: "flex", gap: "14px", alignItems: "center",
            background: e.color + "08", border: `1px solid ${e.color}22`,
            borderRadius: "6px", padding: "10px 14px",
          }}>
            <div style={{ width: "110px", fontSize: "11px", fontFamily: "monospace", color: e.color, flexShrink: 0 }}>{e.day}</div>
            <div style={{ fontSize: "13px", color: "#d4edd4" }}>{e.event}</div>
          </div>
        ))}
      </div>

      <Card accent="#facc15">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#facc15", marginBottom: "10px" }}>📱 HOW TO SET UP IN GOOGLE CALENDAR</div>
        <Bullet color="#facc15" text='Create a new calendar called "Health Routine" — keep it separate' />
        <Bullet color="#facc15" text="Set each event as recurring with colour-coded categories:" sub="Green = Diet | Blue = Exercise | Purple = Gut | Pink = Skin | Orange = Hair" />
        <Bullet color="#facc15" text="Enable notifications 15 min before each event" />
        <Bullet color="#facc15" text="Block Sunday 10–11 AM as 'Weekly Review' — track: weight, bowel health, mood, cigs/day, skin" />
        <Bullet color="#facc15" text="Add a monthly reminder: 'Take progress photo' — visual proof keeps motivation alive" />
      </Card>

      <Card accent="#a78bfa">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#a78bfa", marginBottom: "10px" }}>WEEKLY TRACKING CHECKLIST</div>
        {["Weight logged", "Bowel movement daily?", "Cigs/day count", "Gym sessions completed", "Water 3L+ daily?", "Skincare routine done", "Hair oil done 3×", "Slept 7+ hrs majority of nights"].map(item => (
          <div key={item} style={{ display: "flex", gap: "10px", padding: "5px 0", alignItems: "center" }}>
            <span style={{ color: "#a78bfa", fontSize: "14px" }}>□</span>
            <span style={{ fontSize: "13px", color: "#d4edd4" }}>{item}</span>
          </div>
        ))}
      </Card>

      <Card accent="#f87171">
        <div style={{ fontSize: "12px", fontFamily: "monospace", color: "#f87171", marginBottom: "8px" }}>FINAL REMINDER</div>
        <p style={{ fontSize: "14px", color: "#d4edd4", lineHeight: "1.7", margin: 0 }}>
          The calendar events will remind you — but the <strong style={{ color: "#f0fdf0" }}>identity shift</strong> is what makes it stick. You're not "trying to be healthy." You're someone who <em>is</em> healthy, making choices that reflect that. Every meal, every gym session, every skipped cigarette is a vote for that identity.
        </p>
      </Card>
    </div>
  );
}

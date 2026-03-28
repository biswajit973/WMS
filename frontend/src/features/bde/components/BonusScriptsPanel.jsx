import React from 'react';

const SCRIPT_GROUPS = [
    {
        title: 'Small Business',
        subtitle: 'For kirana stores, salons, tailors, tutors, local service shops, and low-ticket businesses.',
        scripts: [
            {
                name: 'Dream + viral angle',
                lines: [
                    'Sir, ek baar imagine kijiye, agar social media pe aapki shop ka video chal gaya aur local area mein viral feel aa gaya, toh footfall kitna badh sakta hai.',
                    'Aaj kal aapne bhi dekha hoga chhote-chhote shops Mumbai, Delhi aur dusre cities mein reels aur internet ki wajah se bahut famous ho gaye.',
                    'Hum website ke saath aapka social media presence bhi strong karenge, basic branding bhi set karenge, taaki log aapko online yaad rakhein.',
                ],
            },
            {
                name: 'Family search behaviour line',
                lines: [
                    'Sir, aaj kal ghar mein bhi aise hi hota hai, papa mummy bolte hain beta zara dekh toh pass mein kaunsa achha shop hai.',
                    'Bachhe obviously internet pe wahi shop ko strong maante hain jiska social media, website, aur online presence achha dikhta hai.',
                    'Aapka physical shop already hai, bas ek small one-time amount se aap internet pe bhi lifetime presence bana sakte hain.',
                ],
            },
            {
                name: 'Simple trust opener',
                lines: [
                    'Namaste sir, aapka business local level pe already known hai, lekin online aapka apna proper face abhi missing hai.',
                    'Aaj kal log pehle Google pe dekhte hain, phir call ya visit karte hain.',
                    'Main aapko ek simple website example WhatsApp pe bhej doon jo aapke business jaisa hi hai?',
                ],
            },
            {
                name: 'Maps is enough counter',
                lines: [
                    'Google Maps achha hai sir, but wahan customer aapko competitor ke saath compare karta hai.',
                    'Website pe sirf aapka naam, aapka kaam, aur aapka trust dikhega.',
                    'Bas ek sample dekh lijiye, phir aap khud judge kariye.',
                ],
            },
            {
                name: 'Low budget close',
                lines: [
                    'Agar aap abhi small level pe start karna chahte hain, toh hum basic starter presence se bhi shuru kar sakte hain.',
                    'Main idea yeh hai ki online aapka apna trusted page ho.',
                    'Pehle WhatsApp pe sample dekh lijiye, phir next step decide karte hain.',
                ],
            },
        ],
    },
    {
        title: 'Medium Business',
        subtitle: 'For boutiques, restaurants, schools, clinics, showrooms, coaching centres, and growing local brands.',
        scripts: [
            {
                name: 'Social media + branding dream pitch',
                lines: [
                    'Sir, aaj business sirf shop tak limited nahi hai, poora internet aapka market ban sakta hai.',
                    'Agar aapki branding, logo, website, aur social media sab ek proper system mein aa jaye, toh customer aapko zyada serious brand ke tarah dekhega.',
                    'Hamari team 12 years experience ke saath aapka website hi nahi, aapka online presence bhi strong direction mein set kar sakti hai.',
                ],
            },
            {
                name: 'Growth + image pitch',
                lines: [
                    'Sir, aapka business ab growth stage pe hai, lekin online image abhi utni strong nahi dikh rahi jitni honi chahiye.',
                    'Aapke competitor agar website se enquiries le rahe hain, toh aapka loss silent way mein ho raha hai.',
                    'Main ek relevant sample bhejta hoon jisse aapko clear ho jayega ki website enquiry aur image dono kaise improve karti hai.',
                ],
            },
            {
                name: 'No ecommerce needed script',
                lines: [
                    'Website ka matlab sirf online selling nahi hota.',
                    'Yeh aapka digital showroom hota hai jahan customer trust build karke call karta hai ya visit karta hai.',
                    'Aapke type ke business ka ek short sample bhej doon?',
                ],
            },
            {
                name: 'Price objection reframe',
                lines: [
                    'Sir, yeh daily expense nahi hai, yeh one-time business asset hai.',
                    'Aapke business mein ek-do genuine enquiries bhi aati hain toh cost recover ho sakti hai.',
                    'Main sample aur simple scope WhatsApp pe share karta hoon, phir calmly decide karte hain.',
                ],
            },
        ],
    },
    {
        title: 'Big Business',
        subtitle: 'For builders, hospitals, premium jewellers, real estate firms, architects, and high-trust businesses.',
        scripts: [
            {
                name: 'Full digital presence pitch',
                lines: [
                    'Sir, premium business ko aaj sirf ek website nahi, ek complete digital presence chahiye.',
                    'Website, branding, logo consistency, aur social media presence milkar customer ke mind mein strong authority banate hain.',
                    'Hum 12 years experts ke saath yeh presence structured way mein build karte hain, jisse aap aur premium aur trusted dikhte hain.',
                ],
            },
            {
                name: 'Authority opener',
                lines: [
                    'Sir, aapka business category premium trust pe chalta hai, lekin online authority us level pe visible nahi hai.',
                    'High-value customer pehle verify karta hai, phir enquiry karta hai.',
                    'Isi liye ek premium website aapke liye status aur trust dono ka kaam karti hai.',
                ],
            },
            {
                name: 'Competitor FOMO line',
                lines: [
                    'Aaj customer compare karke decision leta hai, aur jis brand ka online presentation strong hota hai usko edge milta hai.',
                    'Agar competitor ka apna platform hai aur aap sirf listing pe ho, toh control unke side mein chala jata hai.',
                    'Main aapko ek premium comparison sample bhejta hoon, phir 10 minute discuss kar lete hain.',
                ],
            },
            {
                name: 'Decision-stage close',
                lines: [
                    'Aapke business ke liye basic presence enough nahi hogi, proper trust-led structure chahiye.',
                    'Isliye main suggest karunga ki aap isko image upgrade ke tarah dekhein, sirf website ke tarah nahi.',
                    'Kya main scope summary aur next-step note abhi share kar doon?',
                ],
            },
        ],
    },
];

const BonusScriptsPanel = () => (
    <div className="space-y-8">
        {SCRIPT_GROUPS.map((group) => (
            <section key={group.title}>
                <div className="rounded-[18px] border border-[#eadfca] bg-[#f7f1e5] p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-stone-500">{group.title}</p>
                    <p className="mt-2 text-sm leading-7 text-stone-700">{group.subtitle}</p>
                </div>

                <div className="mt-4 grid gap-4">
                    {group.scripts.map((script) => (
                        <article key={script.name} className="rounded-[18px] border border-[#eadfca] bg-[#fcfaf5] p-5">
                            <h3 className="text-lg font-semibold text-stone-900">{script.name}</h3>
                            <div className="mt-4 space-y-3">
                                {script.lines.map((line) => (
                                    <p key={line} className="text-[15px] leading-8 text-stone-700">
                                        • {line}
                                    </p>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        ))}
    </div>
);

export default BonusScriptsPanel;

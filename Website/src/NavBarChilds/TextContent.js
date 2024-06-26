// TextContent.js

import React, { useRef, useEffect } from 'react';
import './TextContent.css';

const TextContent = ({ sectionRefs }) => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  useEffect(() => {
    sectionRefs.current = [
      section1Ref.current,
      section2Ref.current,
      section3Ref.current,
      section4Ref.current,
      section5Ref.current
    ];
  }, [sectionRefs]);

  return (
    <div className="text-content">
      <div ref={section1Ref}>
        <h2>Section 1</h2>
        <p>
        DESTROY THE BASE
The Nexus is the heart of both teams’ bases. Destroy the enemy’s Nexus first to win the game.
YOUR NEXUS
Your Nexus is where minions spawn. Behind your Nexus is the Fountain, where you can quickly replenish health and mana and access the Shop.
ENEMY NEXUS
Located in the enemy team’s base, the enemy Nexus is just like yours. Destroying the enemy Nexus wins your team the game.

        </p>
      </div>
      <div ref={section2Ref}>
        <h2>Section 2</h2>
        <p>
        CLEAR THE PATH
Your team needs to clear at least one lane to get to the enemy Nexus. Blocking your path are defense structures called turrets and inhibitors. Each lane has three turrets and one inhibitor, and each Nexus is guarded by two turrets.
TURRETS
Turrets deal damage to enemy minions and champions, and provide limited vision from the Fog of War for their team. Attack these structures with minions ahead of you to avoid damage and charge ahead.
INHIBITORS
Each Inhibitor is protected by a Turret. When destroyed, super minions will spawn in that lane for several minutes. Afterward, the Inhibitor will respawn and Super Minions will stop spawning.

        </p>
      </div>
      <div ref={section3Ref}>
        <h2>Section 3</h2>
        <p>
        TAKE ON THE JUNGLE
In between the lanes is the jungle, where neutral monsters and jungle plants reside. The two most important monsters are Baron Nashor and the Drakes. Killing these units grants unique buffs for your team and can also turn the tide of the game.
BARON NASHOR
Baron Nashor is the most powerful monster in the jungle. Killing Baron grants the slayer’s team bonus attack damage, ability power, empowered recall, and greatly increases the power of nearby minions.
DRAKES
Drakes, or dragons, are powerful monsters that grant unique bonuses depending on the element of the drake your team slays. There are five Elemental Drakes and one Elder Dragon.

        </p>
      </div>
      <div ref={section4Ref}>
        <h2>Section 4</h2>
        <p>
        CHOOSE YOUR LANE
There are five positions that make up the recommended team comp for the game. Each lane lends itself to certain kinds of champions and roles—try them all or lock in to the lane that calls you.
TOP LANE
Champions in top lane are the tough solo fighters of the team. It’s their job to protect their lane and focus on the enemy team’s most powerful members.
JUNGLE
Junglers live for the hunt. Stalking between lanes with stealth and skill, they keep a close eye on the most important neutral monsters and pounce the moment an opponent lets their guard down.
MID LANE
Mid laners are your high burst damage champions who can do it all—solo and as a team. For them, combat is a dangerous dance where they’re always looking for an opportunity to outplay their opponent.
BOT LANE
Bot lane champions are the dynamite of the team. As precious cargo, they need to be protected early on before amassing enough gold and experience to carry the team to victory.
SUPPORT
Support champions are team guardians. They help keep teammates alive and primarily focus on setting up kills, protecting their teammate in bot lane until they become stronger.
        </p>
      </div>
      <div ref={section5Ref}>
        <h2>Section 5</h2>
        <p>
EARN EXPERIENCE
When champions earn a certain amount of experience, they level up and can unlock or strengthen abilities and raise their base stats. Gain experience by killing enemy units and champions, assisting in a kill, and destroying defense structures.        </p>
      </div>
    </div>
  );
};

export default TextContent;

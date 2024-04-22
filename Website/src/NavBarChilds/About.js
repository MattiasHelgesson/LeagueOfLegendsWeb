import React, { useState, useEffect, useRef } from 'react';
import backgroundImage1 from '../images/Bild.jpg';
import backgroundImage2 from '../images/Bild2.jpg';
import backgroundImage3 from '../images/Bild3.jpg';
import backgroundImage4 from '../images/Bild4.jpg';
import backgroundImage5 from '../images/Bild5.jpg';
import './About.css';

const About = () => {
  const [currentBackground, setCurrentBackground] = useState(backgroundImage1);
  const sectionRefs = useRef();

  useEffect(() => {
    const scrollToText = (index) => {
      const textList = sectionRefs.current;

      const allNodex = textList.querySelectorAll('li');
      allNodex.forEach(element => {
        element.className = 'hidden';
      });

      const textNode = allNodex[index];
      textNode.className = '';

      if(index == 4) {
        textNode.className = 'white-back';
      }
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;
      const scrollPercentage = (scrollTop / (totalHeight - windowHeight)) * 100;

      let backgroundImage;
      if (scrollPercentage < 20) {
        scrollToText(0);
        backgroundImage = backgroundImage1;
      } else if (scrollPercentage < 40) {
        scrollToText(1);
        backgroundImage = backgroundImage2;
      } else if (scrollPercentage < 60) {
        scrollToText(2);
        backgroundImage = backgroundImage3;
      } else if (scrollPercentage < 80) {
        scrollToText(3);
        backgroundImage = backgroundImage4;
      } else {
        scrollToText(4);
        backgroundImage = backgroundImage5;
      }

      setCurrentBackground(backgroundImage);
    };
    
    scrollToText(0);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="about-page" style={{ backgroundImage: `url(${currentBackground})` }}>
      <ul ref={sectionRefs} className='text-content'>
        <li className='hidden'>
        DESTROY THE BASE
The Nexus is the heart of both teams’ bases. Destroy the enemy’s Nexus first to win the game.
YOUR NEXUS
Your Nexus is where minions spawn. Behind your Nexus is the Fountain, where you can quickly replenish health and mana and access the Shop.
ENEMY NEXUS
Located in the enemy team’s base, the enemy Nexus is just like yours. Destroying the enemy Nexus wins your team the game.
        </li>
        <li className='hidden'>
        CLEAR THE PATH
Your team needs to clear at least one lane to get to the enemy Nexus. Blocking your path are defense structures called turrets and inhibitors. Each lane has three turrets and one inhibitor, and each Nexus is guarded by two turrets.
TURRETS
Turrets deal damage to enemy minions and champions, and provide limited vision from the Fog of War for their team. Attack these structures with minions ahead of you to avoid damage and charge ahead.
INHIBITORS
Each Inhibitor is protected by a Turret. When destroyed, super minions will spawn in that lane for several minutes. Afterward, the Inhibitor will respawn and Super Minions will stop spawning.
        </li>
        <li className='hidden'>
        TAKE ON THE JUNGLE
In between the lanes is the jungle, where neutral monsters and jungle plants reside. The two most important monsters are Baron Nashor and the Drakes. Killing these units grants unique buffs for your team and can also turn the tide of the game.
BARON NASHOR
Baron Nashor is the most powerful monster in the jungle. Killing Baron grants the slayer’s team bonus attack damage, ability power, empowered recall, and greatly increases the power of nearby minions.
DRAKES
Drakes, or dragons, are powerful monsters that grant unique bonuses depending on the element of the drake your team slays. There are five Elemental Drakes and one Elder Dragon.
        </li>
        <li className='hidden'>
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
        </li>
        <li className='hidden'>
        EARN EXPERIENCE
When champions earn a certain amount of experience, they level up and can unlock or strengthen abilities and raise their base stats. Gain experience by killing enemy units and champions, assisting in a kill, and destroying defense structures.
        </li>
      </ul>
      {/* <TextContent sectionRefs={sectionRefs} /> */}
    </div>
  );
};

export default About;

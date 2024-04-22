import React from 'react';
import './News.css';
import Arena_GameMode from '../images/2v2v2.png';
import League_Patch_14_4 from '../images/LoL_Patch_14_4_Notes.jpg';
import TFT_Patch_14_4 from '../images/TFT_SET1024_PatchNotes.jpg';
import soul_fighter_viego_final from '../images/soul-fighter-viego-final.png';

function News(props) {
  return (
    <div className="News">
      <div className="column">
        <img src={League_Patch_14_4} alt="" />
        <h2>League Uppdates</h2>
        <h2>Patch 14.4</h2>
        <p>Hold the door! Here comes patch 14.4!

In this week's patch we have quite a few feels-good-to-play quality of life updates for some gameplay systems and champions. To kick things off we have a kit update for Rek'Sai, an update to help tethers in game feel more responsive, and some follow-up QoL adjustments for Smolder. We also have some feels-good-to-play-against changes to make champions like Illaoi, Fiora, and tank Bard more reasonable if you find yourself matched up with them. We're also making some updates to support power curves, fountain regeneration, Lost Chapter items, adjustments to Emerald+ LP gains, and ARAM!

In other news, this is the patch where we update our minimum specs to no longer support Windows 7, 8, and 8.1, so make sure you upgrade! We also have an update on the Vanguard rollout plan, so make sure you read the full section below for all the details.</p>
      </div>
      <div className="column">
        <img src={TFT_Patch_14_4} alt="" />
        <h2>Tft Uppdates</h2>
        <h2>Patch 14.4</h2>
        <p>Welcome to our Remix Rumble Championship Patch!

But you don’t have to be competing next weekend to be a champion—cause just by reading this, you’re already one! Due to the competitive nature of this patch, we’re going extra light and extra small here, but that’s not stopping our update to Team Planner. In addition to that, we’ve got some fresh balance updates for the last patch of the 3.5 Revival mode. And what’s this…a new Learnings article with insights into how the team thinks Remix Rumble went, and where we can take TFT in the future!?</p>
      </div>
      <div className="column">
        <img src={Arena_GameMode} alt="" />
        <h2>Arena Uppdate</h2>
        <p>Nya saker som händer med game modes. Nya tillägg och gammla bortagelser. </p>
      </div>
      <div className="column larger-column">
        <img src={soul_fighter_viego_final} alt="" />
        <h2>Generell Info Som Hänt</h2>
        <p>Bara lite text om vad som hänt. Saker som till kommit. Samt saker som hänt under League community. 
Saker som kan vara användbara för spelaren eller bara generella saker som inte passar in någon annan stans</p>
      </div>
    </div>
  );
}

export default News;

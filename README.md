
# Welcome to my RPG Sheet made on React

This is my personal project aiming to improve my react skill and help RPGs fans using a unique, interactive, responsive and configurable RPG character sheet. For now, I'm doing this project using D&D5E, maybe someday other systems.


## URGENT THINGS TO DO:

### 

* **[✓]** Create a generic component that will represent "Inspiration", "Proficiency Bonus", "Passive Wisdom". This component will contain a  numbercounter sided by a title description.

* Create a generic component for "Skill" (skills must have a proficiency check ) and "Saving Throws", something like: Icon + counter + description.

* Create a component for "Other Proficiencies", "Languages" and "Features & Traits". I can imagine something like a textfield that adds new itens to the character object, they act like todo cards.

* Create a component with 3 items representing "Armor Class", "Initiative" and "Speed".

* Create a generic component for "Current Hit Points" and "Temporary Hit Points".

* Create a component for "Attacks & Spellcasting".

* Create a component for "Equipment". This component will contain counters for money, also something like "Other Proficiencies" system of todo like add/remove items with autocomplete.

* Create a generic component for "Personality Traits", "Ideals", "Bonds" and "Flaws"

## IMPORTANT THINGS TO DO:

* Redo header, aligning and fixing width formatting issues
* Rename extension JS to TS, due to this project use typescript
* **[✓]** Use map method on static "Ability Score component"
* **[✓]** Use Props from Material UI to extend props needed when making new components from Material UI components. 

>Ex.: 

## USER PATH:

1. Open the App

2. Type character name. 
>Ex.: "Sava Jcript"

3. Select a race.

>Ex.: Elf (Drow):
>
> * Stats:
>   * +2 Dexterity
>   * +1 Charisma
>   * 30ft speed
> * Skills:
>   * Perception
> * Features:
>   * Darkvision: 60 ft
>   * Fey Ancestry
>   * Sunlight sensitivity
>   * Drow Magic
> * Spells:
>   * Dancing Lights
> * Weapons mastery:
>   * Rapiers
>   * Short swords
>   * hand crossbows
> * Languages:
>   * Common
>   * Elven

4. Select a class.

>Ex.: Rogue:
> * Hit Dice: 1d8
> * HP: 8 + Constitution modifier
> * Armors mastery:
>   * Light armor
> * Weapons mastery:
>   * Simple weapons
>   * Longswords
> * Tools mastery:
>   * Thieve tools
> * Saving Throw:
>   * Dexterity
>   * Intelligence
> * Skills:
>   * Acrobatics
>   * Persuasion
>   * Stealth
>   * Insight
> * Expertise:
>   * Acrobatics
>   * Stealth
> * Features:
>   * Sneak Attack 1d6
> * Languages:
>   * Thieves Can't
> * Proficiency bonus: +2

5. Roll and distribute abilities score.

>Ex.: 11, 9, 10, 15, 10, 14

6. Write down the characters personality traits:

7. Select a background.

>Ex.: Criminal
> * Skills:
>   * Deception
>   * Survival (took that one because I already have "Stealth")
> * Tools mastery:
>   * Dice.
> * Criminal contact:
>   * Someone else

7. Use default equipment or roll dices for gold and buy at the store.

>Ex.: Rolled for gold.
> * Shortsword x 2
> * Dagger x 2
> * Leather armor
> * Burglar's pack
> * Thieves Tools

9. Select an alignment.

## Features to add


* Automatic fill the sheet with modifiers, skills etc. when selecting a race, class etc.
* Custom Colors, Images, and themes for roles
* Night-mode

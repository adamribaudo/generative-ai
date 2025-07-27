function get_civ_details(civilization) {
    const civDetails = {
        Britons: `The Britons are a Foot Archer civilization

        Civ Bonuses:
        - Shepherds work +25% faster
        - Town Centers cost -50% wood starting in Castle Age
        - Foot Archers +1/+2 range in Castle/Imperial Age

        Unique Unit:
        Longbowman (Foot Archer)

        Unique Techs:
        - Yeomen (Foot Archers and Skirmisher-line +1 range; Watch Tower-line +2 attack)
        - Warwolf (Trebuchets deal blast damage and are more accurate)

        Team Bonus:
        Archery Ranges work +10% faster`,
    };
    
    return civDetails[civilization] || "Civilization not found.";

}

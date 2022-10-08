
export class Hero {
    is_hero = false
    hero_xp = []
    hero_level = []
    hero_skills = []
  
    constructor(type){
      this.type = type
    }
  }
  
  export class Unit {
      image = ""
      hero = null
      equipment = []
      constructor(id, unitName, models, point_const, skills){
        this.id = id
          this.name = unitName
          this.models = models
          this.point_const = point_const
          this.skills = skills
      }
      makeHero(type){
        this.hero = heroTypes[type]
      }
  };
  
  export class Formation {
    action_points = 1 //amount of actions a formation can do in a turn.
    work_force = 0 //points to complete the an action.
    damage = null
    defense = 0
    model_count = 0
    vision = 2
    Xp=0
    intelligence=1
    level= 0
    benefits=[]//this benefits come from the formation type if there is one 
    badges=[]//this are archievements as formation
    movement = 4
    type = undefined //this comes from the composition of the formation (old 40k formations rules)
    dedication=[] //this are enancements assigned to the formation by user
    color='white' //faction related
    subColor='white' //user choice
    is_listed = false
    point_const = 0  
    carry_capacity = 0 //from the units
    infantry_count = 0
  
  
    constructor(name, composition = [], s_description="", l_description="", image="", faction="", subfaction=""){
      this.name = name
      this.composition = composition
      this.s_description = s_description
      this.l_description = l_description
      this.image = image
      this.faction = faction
      this.subfaction = subfaction
      this.setPointCost() 
      this.setDamage()
      this.setMovement()
      this.setWorkForce()
      this.setModelCount()
      this.setMaxVision()
      this.setFaction()
      //action points?
      }
  
      setPointCost(){ // checked  
        this.composition.forEach(unit =>{
        this.point_const += unit.point_const
        });
      }
  
      setDamage(){ //checked
          this.damage = Math.floor(this.point_const / 10)
      }
      setWorkForce(){ //checked
        let apply_bonus = false;
        let bonus = 0;
        for (let unit of this.composition){
          if(unit.skills.type.includes("infantry")){
            this.work_force += unit.point_const;
          }
          unit.skills.passive.forEach(skill =>{
            if(skill.includes("work_force")){
              apply_bonus = true
              bonus = (parseInt(skill.split('+')[1], 10)/100);
            }
          });
        }
        if(apply_bonus){
          this.work_force += this.work_force * bonus;
        }
      }
      setMovement(){ //checked
        let isTransport = false;
        let transportCapacity = 0;
        let nonInfantryModelsMinMovement = 100;
        let slowestMovement = 100;
  
        //check each unit in the formation.
        this.composition.forEach(unit => {  
          //checks the slowest movement value in the formation.
          if (unit.skills.movement < slowestMovement) {
            slowestMovement = unit.skills.movement;
          }   
          //check how many infantry models.
          if(unit.skills.type.includes('infantry')){
            this.infantry_count += unit.models;
          };
          //what is the minimun movement value of all not infantry models in the formation.
          if(!unit.skills.type.includes('infantry')){
            if (unit.skills.movement < nonInfantryModelsMinMovement){
              nonInfantryModelsMinMovement = unit.skills.movement;
              }
          }
          //check if there is transport(s) and if true, whats the transport combine capacity.
          unit.skills.passive.forEach(skill => {
            if(skill.includes('transport')){
              isTransport = true;
              transportCapacity += parseInt(skill.split('+')[1], 10);  
            }
          })       
        })
        //is the transport capacity iqual or more that the infantry models. if yes min movement is taken from tranports else from the slowes unit in the formastion
        if(transportCapacity >= this.infantry_count){
          this.movement = nonInfantryModelsMinMovement;
        }else{
          this.movement = slowestMovement;
          }  
      }
      setModelCount(){ //checked
          this.composition.forEach(unit=>{
            this.model_count += unit.models;
          });
      }
      setMaxVision(){ //checked
        let bonusVision = 0;
        let tempBonus = 0;
        this.composition.forEach(unit => {//ok
          unit.skills.passive.forEach(skill => {//ok
            if (skill.includes('vision+')){ //ok
              tempBonus = getValue(skill);
              if(tempBonus > bonusVision){//ok
                bonusVision = tempBonus;
              };
            };
          });
          this.vision += bonusVision;
        });
      };
      setFaction(){
        switch (this.faction.name) {
          case "The Justice Aliance":
            this.defense = 10;
            this.color = "#309abb";
            break;
          case "damage%+10":
            this.damage += this.damage * 0.1;
            this.color = "#830202";
            break;
          case "The Death Machines":
            this.work_force *= 0.1;
            this.color = "#1fc778";
            //regeneration while still?
            break;
          case "The Beast Hordes":
            this.movement += 1;
            this.color = "#395B64";
            //less intelligent?
            break;
          case "The Advanced Humanoids":
            this.intelligence += 0.1;
            this.color = "#0F3D3E";
            break;
          case "The Infestation Bugs":
            for (let unit in this.units){
              unit.skills.passive.push('claim-tile');
            }
            this.color = "#D1512D";
            //low defence?
            break;
        
          default:
            break;
        }
      }
  
      increaseXP(increase){
        this.Xp += increase * this.intelligence;
      }
  };
  
  export class ArmyList {// all the models in the map from the same player.
      point_cost = 0
      color=null
      faction = null //this is an object with own properties, including faction color.
  
      constructor(name="", composition=""){
          this.name = name
          this.composition = composition //an array of all formations-objects.
          this.setPointCost()
      }
  
      setColor(color){
        this.composition.forEach(formation=> formation.color = color)
        this.color=color
      }
  
      setPointCost(){
        if (this.composition){
          this.composition.forEach(formation => this.point_cost += formation.pointCost)
        }
        
      }
  }
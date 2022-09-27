# Database

## User

getUser(searchKey) returns an object with the username value === searchKey:

todo: user CRUD

```js
{
  type = "user";
  level = 0;
  rank = "Conscript";
  badges = [];
  battles = 0;
  winRate = 0;
  formations = []; //list of objects Formation
  army_lists = {}; //armylist object
  email = "";
  image = "conscript_red.png";
  images = [
    "conscript_red.png",
    "conscript_blue.png",
    "conscript_green.png",
    "conscript_yellow.png",
  ];
  username;
  password;
}
```

## Formation:

    getFormations(user) returns an array of all formations under the given user that are not enlisted in the user's army:

    TODO: Formation CRUD.

```js
{
  action_points = 1;
  work_force = 0;
  damage = null;
  defense = 0;
  model_count = 0;
  vision = 2;
  Xp = 0;
  intelligence = 1;
  level = 0;
  benefits = [];
  badges = [];
  movement = 4;
  type = undefined;
  dedication = [];
  color = "white";
  subColor = "white";
  is_listed = false;
  point_const = 0;
  carry_capacity = 0;
  infantry_count = 0;

  name = name;
  composition = composition;
  s_description = s_description;
  l_description = l_description;
  image = image;
  faction = faction;
  subfaction = subfaction;
}
```

## ArmyList

    getArmy(user) returns an array of all formations under the given user that are enlisted in the user's army:
    todo: Army CRUD
    getArmy()
    modifyArmy()
    resetArmy()

```js
    {
        point_cost = 0,
        color=null,
        faction = {},
        name = "",
        composition = [{formation},{formation}, {formation}],
    }
```

## Map

    getMap()
    addMap()
    deleteMap()

## Campaign

    getCampaignt()
    addCampaign()
    deleteCampaign()

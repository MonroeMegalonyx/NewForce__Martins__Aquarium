// import { useFish } from "./FishDataProvider.js"

// const allTheFish = useFish()

// for (const fish of allTheFish) {
//    console.log(fish)
// }

import { FishList } from "./fish/FishList.js";

FishList();

import { TipList } from "./tips/TipsList.js";

TipList();

import { LocalesList} from "./locations/LocationsList.js"

LocalesList();

import { mostHolyFish } from "./fish/FishDataProvider.js";

mostHolyFish();

import { soldierFish } from "./fish/FishDataProvider.js";

soldierFish();

import { nonHolyFish } from "./fish/FishDataProvider.js";

nonHolyFish();

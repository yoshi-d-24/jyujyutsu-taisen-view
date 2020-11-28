/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateInfectedDataInput = {
  id?: string | null,
  content: string,
};

export type ModelInfectedDataConditionInput = {
  content?: ModelStringInput | null,
  and?: Array< ModelInfectedDataConditionInput | null > | null,
  or?: Array< ModelInfectedDataConditionInput | null > | null,
  not?: ModelInfectedDataConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateInfectedDataInput = {
  id: string,
  content?: string | null,
};

export type DeleteInfectedDataInput = {
  id?: string | null,
};

export type CreateUserInput = {
  id?: string | null,
  name: string,
  hp: number,
  woeid: number,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  hp?: ModelIntInput | null,
  woeid?: ModelIntInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  hp?: number | null,
  woeid?: number | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateCommandInput = {
  id?: string | null,
  name: string,
  description: string,
  attack: number,
  isOutdoor: boolean,
  inCommandList: boolean,
  userID: string,
};

export type ModelCommandConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  attack?: ModelIntInput | null,
  isOutdoor?: ModelBooleanInput | null,
  inCommandList?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelCommandConditionInput | null > | null,
  or?: Array< ModelCommandConditionInput | null > | null,
  not?: ModelCommandConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCommandInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  attack?: number | null,
  isOutdoor?: boolean | null,
  inCommandList?: boolean | null,
  userID?: string | null,
};

export type DeleteCommandInput = {
  id?: string | null,
};

export type CreateBattleInput = {
  id?: string | null,
  date: string,
  userHP: number,
  curseHP: number,
  inAreaExpansion: boolean,
  userID: string,
  curseID: string,
};

export type ModelBattleConditionInput = {
  date?: ModelStringInput | null,
  userHP?: ModelIntInput | null,
  curseHP?: ModelIntInput | null,
  inAreaExpansion?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  curseID?: ModelIDInput | null,
  and?: Array< ModelBattleConditionInput | null > | null,
  or?: Array< ModelBattleConditionInput | null > | null,
  not?: ModelBattleConditionInput | null,
};

export type UpdateBattleInput = {
  id: string,
  date?: string | null,
  userHP?: number | null,
  curseHP?: number | null,
  inAreaExpansion?: boolean | null,
  userID?: string | null,
  curseID?: string | null,
};

export type DeleteBattleInput = {
  id?: string | null,
};

export type CreateCurseInput = {
  id?: string | null,
  name: string,
  date: string,
  minNegative: number,
  maxNegative: number,
  hp: number,
  attack: number,
  hitRate: number,
  imgSrc: string,
  trends: string,
  battleID: string,
};

export type ModelCurseConditionInput = {
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  minNegative?: ModelIntInput | null,
  maxNegative?: ModelIntInput | null,
  hp?: ModelIntInput | null,
  attack?: ModelIntInput | null,
  hitRate?: ModelFloatInput | null,
  imgSrc?: ModelStringInput | null,
  trends?: ModelStringInput | null,
  battleID?: ModelIDInput | null,
  and?: Array< ModelCurseConditionInput | null > | null,
  or?: Array< ModelCurseConditionInput | null > | null,
  not?: ModelCurseConditionInput | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCurseInput = {
  id: string,
  name?: string | null,
  date?: string | null,
  minNegative?: number | null,
  maxNegative?: number | null,
  hp?: number | null,
  attack?: number | null,
  hitRate?: number | null,
  imgSrc?: string | null,
  trends?: string | null,
  battleID?: string | null,
};

export type DeleteCurseInput = {
  id?: string | null,
};

export type ModelInfectedDataFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  and?: Array< ModelInfectedDataFilterInput | null > | null,
  or?: Array< ModelInfectedDataFilterInput | null > | null,
  not?: ModelInfectedDataFilterInput | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  hp?: ModelIntInput | null,
  woeid?: ModelIntInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelCommandFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  attack?: ModelIntInput | null,
  isOutdoor?: ModelBooleanInput | null,
  inCommandList?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  and?: Array< ModelCommandFilterInput | null > | null,
  or?: Array< ModelCommandFilterInput | null > | null,
  not?: ModelCommandFilterInput | null,
};

export type ModelBattleFilterInput = {
  id?: ModelIDInput | null,
  date?: ModelStringInput | null,
  userHP?: ModelIntInput | null,
  curseHP?: ModelIntInput | null,
  inAreaExpansion?: ModelBooleanInput | null,
  userID?: ModelIDInput | null,
  curseID?: ModelIDInput | null,
  and?: Array< ModelBattleFilterInput | null > | null,
  or?: Array< ModelBattleFilterInput | null > | null,
  not?: ModelBattleFilterInput | null,
};

export type ModelCurseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  date?: ModelStringInput | null,
  minNegative?: ModelIntInput | null,
  maxNegative?: ModelIntInput | null,
  hp?: ModelIntInput | null,
  attack?: ModelIntInput | null,
  hitRate?: ModelFloatInput | null,
  imgSrc?: ModelStringInput | null,
  trends?: ModelStringInput | null,
  battleID?: ModelIDInput | null,
  and?: Array< ModelCurseFilterInput | null > | null,
  or?: Array< ModelCurseFilterInput | null > | null,
  not?: ModelCurseFilterInput | null,
};

export type CreateInfectedDataMutationVariables = {
  input: CreateInfectedDataInput,
  condition?: ModelInfectedDataConditionInput | null,
};

export type CreateInfectedDataMutation = {
  createInfectedData:  {
    __typename: "InfectedData",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateInfectedDataMutationVariables = {
  input: UpdateInfectedDataInput,
  condition?: ModelInfectedDataConditionInput | null,
};

export type UpdateInfectedDataMutation = {
  updateInfectedData:  {
    __typename: "InfectedData",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteInfectedDataMutationVariables = {
  input: DeleteInfectedDataInput,
  condition?: ModelInfectedDataConditionInput | null,
};

export type DeleteInfectedDataMutation = {
  deleteInfectedData:  {
    __typename: "InfectedData",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    name: string,
    hp: number,
    woeid: number,
    commands:  {
      __typename: "ModelCommandConnection",
      items:  Array< {
        __typename: "Command",
        id: string,
        name: string,
        description: string,
        attack: number,
        isOutdoor: boolean,
        inCommandList: boolean,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    battles:  {
      __typename: "ModelBattleConnection",
      items:  Array< {
        __typename: "Battle",
        id: string,
        date: string,
        userHP: number,
        curseHP: number,
        inAreaExpansion: boolean,
        userID: string,
        curseID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    name: string,
    hp: number,
    woeid: number,
    commands:  {
      __typename: "ModelCommandConnection",
      items:  Array< {
        __typename: "Command",
        id: string,
        name: string,
        description: string,
        attack: number,
        isOutdoor: boolean,
        inCommandList: boolean,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    battles:  {
      __typename: "ModelBattleConnection",
      items:  Array< {
        __typename: "Battle",
        id: string,
        date: string,
        userHP: number,
        curseHP: number,
        inAreaExpansion: boolean,
        userID: string,
        curseID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    hp: number,
    woeid: number,
    commands:  {
      __typename: "ModelCommandConnection",
      items:  Array< {
        __typename: "Command",
        id: string,
        name: string,
        description: string,
        attack: number,
        isOutdoor: boolean,
        inCommandList: boolean,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    battles:  {
      __typename: "ModelBattleConnection",
      items:  Array< {
        __typename: "Battle",
        id: string,
        date: string,
        userHP: number,
        curseHP: number,
        inAreaExpansion: boolean,
        userID: string,
        curseID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCommandMutationVariables = {
  input: CreateCommandInput,
  condition?: ModelCommandConditionInput | null,
};

export type CreateCommandMutation = {
  createCommand:  {
    __typename: "Command",
    id: string,
    name: string,
    description: string,
    attack: number,
    isOutdoor: boolean,
    inCommandList: boolean,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      hp: number,
      woeid: number,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCommandMutationVariables = {
  input: UpdateCommandInput,
  condition?: ModelCommandConditionInput | null,
};

export type UpdateCommandMutation = {
  updateCommand:  {
    __typename: "Command",
    id: string,
    name: string,
    description: string,
    attack: number,
    isOutdoor: boolean,
    inCommandList: boolean,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      hp: number,
      woeid: number,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCommandMutationVariables = {
  input: DeleteCommandInput,
  condition?: ModelCommandConditionInput | null,
};

export type DeleteCommandMutation = {
  deleteCommand:  {
    __typename: "Command",
    id: string,
    name: string,
    description: string,
    attack: number,
    isOutdoor: boolean,
    inCommandList: boolean,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      hp: number,
      woeid: number,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateBattleMutationVariables = {
  input: CreateBattleInput,
  condition?: ModelBattleConditionInput | null,
};

export type CreateBattleMutation = {
  createBattle:  {
    __typename: "Battle",
    id: string,
    date: string,
    userHP: number,
    curseHP: number,
    inAreaExpansion: boolean,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      hp: number,
      woeid: number,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    curseID: string,
    curse:  {
      __typename: "Curse",
      id: string,
      name: string,
      date: string,
      minNegative: number,
      maxNegative: number,
      hp: number,
      attack: number,
      hitRate: number,
      imgSrc: string,
      trends: string,
      battleID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBattleMutationVariables = {
  input: UpdateBattleInput,
  condition?: ModelBattleConditionInput | null,
};

export type UpdateBattleMutation = {
  updateBattle:  {
    __typename: "Battle",
    id: string,
    date: string,
    userHP: number,
    curseHP: number,
    inAreaExpansion: boolean,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      hp: number,
      woeid: number,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    curseID: string,
    curse:  {
      __typename: "Curse",
      id: string,
      name: string,
      date: string,
      minNegative: number,
      maxNegative: number,
      hp: number,
      attack: number,
      hitRate: number,
      imgSrc: string,
      trends: string,
      battleID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBattleMutationVariables = {
  input: DeleteBattleInput,
  condition?: ModelBattleConditionInput | null,
};

export type DeleteBattleMutation = {
  deleteBattle:  {
    __typename: "Battle",
    id: string,
    date: string,
    userHP: number,
    curseHP: number,
    inAreaExpansion: boolean,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      hp: number,
      woeid: number,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    curseID: string,
    curse:  {
      __typename: "Curse",
      id: string,
      name: string,
      date: string,
      minNegative: number,
      maxNegative: number,
      hp: number,
      attack: number,
      hitRate: number,
      imgSrc: string,
      trends: string,
      battleID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCurseMutationVariables = {
  input: CreateCurseInput,
  condition?: ModelCurseConditionInput | null,
};

export type CreateCurseMutation = {
  createCurse:  {
    __typename: "Curse",
    id: string,
    name: string,
    date: string,
    minNegative: number,
    maxNegative: number,
    hp: number,
    attack: number,
    hitRate: number,
    imgSrc: string,
    trends: string,
    battleID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCurseMutationVariables = {
  input: UpdateCurseInput,
  condition?: ModelCurseConditionInput | null,
};

export type UpdateCurseMutation = {
  updateCurse:  {
    __typename: "Curse",
    id: string,
    name: string,
    date: string,
    minNegative: number,
    maxNegative: number,
    hp: number,
    attack: number,
    hitRate: number,
    imgSrc: string,
    trends: string,
    battleID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCurseMutationVariables = {
  input: DeleteCurseInput,
  condition?: ModelCurseConditionInput | null,
};

export type DeleteCurseMutation = {
  deleteCurse:  {
    __typename: "Curse",
    id: string,
    name: string,
    date: string,
    minNegative: number,
    maxNegative: number,
    hp: number,
    attack: number,
    hitRate: number,
    imgSrc: string,
    trends: string,
    battleID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetInfectedDataQueryVariables = {
  id: string,
};

export type GetInfectedDataQuery = {
  getInfectedData:  {
    __typename: "InfectedData",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListInfectedDatasQueryVariables = {
  filter?: ModelInfectedDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListInfectedDatasQuery = {
  listInfectedDatas:  {
    __typename: "ModelInfectedDataConnection",
    items:  Array< {
      __typename: "InfectedData",
      id: string,
      content: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    name: string,
    hp: number,
    woeid: number,
    commands:  {
      __typename: "ModelCommandConnection",
      items:  Array< {
        __typename: "Command",
        id: string,
        name: string,
        description: string,
        attack: number,
        isOutdoor: boolean,
        inCommandList: boolean,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    battles:  {
      __typename: "ModelBattleConnection",
      items:  Array< {
        __typename: "Battle",
        id: string,
        date: string,
        userHP: number,
        curseHP: number,
        inAreaExpansion: boolean,
        userID: string,
        curseID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      hp: number,
      woeid: number,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCommandQueryVariables = {
  id: string,
};

export type GetCommandQuery = {
  getCommand:  {
    __typename: "Command",
    id: string,
    name: string,
    description: string,
    attack: number,
    isOutdoor: boolean,
    inCommandList: boolean,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      hp: number,
      woeid: number,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCommandsQueryVariables = {
  filter?: ModelCommandFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCommandsQuery = {
  listCommands:  {
    __typename: "ModelCommandConnection",
    items:  Array< {
      __typename: "Command",
      id: string,
      name: string,
      description: string,
      attack: number,
      isOutdoor: boolean,
      inCommandList: boolean,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        hp: number,
        woeid: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetBattleQueryVariables = {
  id: string,
};

export type GetBattleQuery = {
  getBattle:  {
    __typename: "Battle",
    id: string,
    date: string,
    userHP: number,
    curseHP: number,
    inAreaExpansion: boolean,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      hp: number,
      woeid: number,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    curseID: string,
    curse:  {
      __typename: "Curse",
      id: string,
      name: string,
      date: string,
      minNegative: number,
      maxNegative: number,
      hp: number,
      attack: number,
      hitRate: number,
      imgSrc: string,
      trends: string,
      battleID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBattlesQueryVariables = {
  filter?: ModelBattleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBattlesQuery = {
  listBattles:  {
    __typename: "ModelBattleConnection",
    items:  Array< {
      __typename: "Battle",
      id: string,
      date: string,
      userHP: number,
      curseHP: number,
      inAreaExpansion: boolean,
      userID: string,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        hp: number,
        woeid: number,
        createdAt: string,
        updatedAt: string,
      } | null,
      curseID: string,
      curse:  {
        __typename: "Curse",
        id: string,
        name: string,
        date: string,
        minNegative: number,
        maxNegative: number,
        hp: number,
        attack: number,
        hitRate: number,
        imgSrc: string,
        trends: string,
        battleID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCurseQueryVariables = {
  id: string,
};

export type GetCurseQuery = {
  getCurse:  {
    __typename: "Curse",
    id: string,
    name: string,
    date: string,
    minNegative: number,
    maxNegative: number,
    hp: number,
    attack: number,
    hitRate: number,
    imgSrc: string,
    trends: string,
    battleID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCursesQueryVariables = {
  filter?: ModelCurseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCursesQuery = {
  listCurses:  {
    __typename: "ModelCurseConnection",
    items:  Array< {
      __typename: "Curse",
      id: string,
      name: string,
      date: string,
      minNegative: number,
      maxNegative: number,
      hp: number,
      attack: number,
      hitRate: number,
      imgSrc: string,
      trends: string,
      battleID: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateInfectedDataSubscription = {
  onCreateInfectedData:  {
    __typename: "InfectedData",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateInfectedDataSubscription = {
  onUpdateInfectedData:  {
    __typename: "InfectedData",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteInfectedDataSubscription = {
  onDeleteInfectedData:  {
    __typename: "InfectedData",
    id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    name: string,
    hp: number,
    woeid: number,
    commands:  {
      __typename: "ModelCommandConnection",
      items:  Array< {
        __typename: "Command",
        id: string,
        name: string,
        description: string,
        attack: number,
        isOutdoor: boolean,
        inCommandList: boolean,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    battles:  {
      __typename: "ModelBattleConnection",
      items:  Array< {
        __typename: "Battle",
        id: string,
        date: string,
        userHP: number,
        curseHP: number,
        inAreaExpansion: boolean,
        userID: string,
        curseID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    name: string,
    hp: number,
    woeid: number,
    commands:  {
      __typename: "ModelCommandConnection",
      items:  Array< {
        __typename: "Command",
        id: string,
        name: string,
        description: string,
        attack: number,
        isOutdoor: boolean,
        inCommandList: boolean,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    battles:  {
      __typename: "ModelBattleConnection",
      items:  Array< {
        __typename: "Battle",
        id: string,
        date: string,
        userHP: number,
        curseHP: number,
        inAreaExpansion: boolean,
        userID: string,
        curseID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    hp: number,
    woeid: number,
    commands:  {
      __typename: "ModelCommandConnection",
      items:  Array< {
        __typename: "Command",
        id: string,
        name: string,
        description: string,
        attack: number,
        isOutdoor: boolean,
        inCommandList: boolean,
        userID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    battles:  {
      __typename: "ModelBattleConnection",
      items:  Array< {
        __typename: "Battle",
        id: string,
        date: string,
        userHP: number,
        curseHP: number,
        inAreaExpansion: boolean,
        userID: string,
        curseID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCommandSubscription = {
  onCreateCommand:  {
    __typename: "Command",
    id: string,
    name: string,
    description: string,
    attack: number,
    isOutdoor: boolean,
    inCommandList: boolean,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      hp: number,
      woeid: number,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCommandSubscription = {
  onUpdateCommand:  {
    __typename: "Command",
    id: string,
    name: string,
    description: string,
    attack: number,
    isOutdoor: boolean,
    inCommandList: boolean,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      hp: number,
      woeid: number,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCommandSubscription = {
  onDeleteCommand:  {
    __typename: "Command",
    id: string,
    name: string,
    description: string,
    attack: number,
    isOutdoor: boolean,
    inCommandList: boolean,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      hp: number,
      woeid: number,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateBattleSubscription = {
  onCreateBattle:  {
    __typename: "Battle",
    id: string,
    date: string,
    userHP: number,
    curseHP: number,
    inAreaExpansion: boolean,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      hp: number,
      woeid: number,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    curseID: string,
    curse:  {
      __typename: "Curse",
      id: string,
      name: string,
      date: string,
      minNegative: number,
      maxNegative: number,
      hp: number,
      attack: number,
      hitRate: number,
      imgSrc: string,
      trends: string,
      battleID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBattleSubscription = {
  onUpdateBattle:  {
    __typename: "Battle",
    id: string,
    date: string,
    userHP: number,
    curseHP: number,
    inAreaExpansion: boolean,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      hp: number,
      woeid: number,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    curseID: string,
    curse:  {
      __typename: "Curse",
      id: string,
      name: string,
      date: string,
      minNegative: number,
      maxNegative: number,
      hp: number,
      attack: number,
      hitRate: number,
      imgSrc: string,
      trends: string,
      battleID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBattleSubscription = {
  onDeleteBattle:  {
    __typename: "Battle",
    id: string,
    date: string,
    userHP: number,
    curseHP: number,
    inAreaExpansion: boolean,
    userID: string,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      hp: number,
      woeid: number,
      commands:  {
        __typename: "ModelCommandConnection",
        nextToken: string | null,
      } | null,
      battles:  {
        __typename: "ModelBattleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    curseID: string,
    curse:  {
      __typename: "Curse",
      id: string,
      name: string,
      date: string,
      minNegative: number,
      maxNegative: number,
      hp: number,
      attack: number,
      hitRate: number,
      imgSrc: string,
      trends: string,
      battleID: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCurseSubscription = {
  onCreateCurse:  {
    __typename: "Curse",
    id: string,
    name: string,
    date: string,
    minNegative: number,
    maxNegative: number,
    hp: number,
    attack: number,
    hitRate: number,
    imgSrc: string,
    trends: string,
    battleID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCurseSubscription = {
  onUpdateCurse:  {
    __typename: "Curse",
    id: string,
    name: string,
    date: string,
    minNegative: number,
    maxNegative: number,
    hp: number,
    attack: number,
    hitRate: number,
    imgSrc: string,
    trends: string,
    battleID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCurseSubscription = {
  onDeleteCurse:  {
    __typename: "Curse",
    id: string,
    name: string,
    date: string,
    minNegative: number,
    maxNegative: number,
    hp: number,
    attack: number,
    hitRate: number,
    imgSrc: string,
    trends: string,
    battleID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
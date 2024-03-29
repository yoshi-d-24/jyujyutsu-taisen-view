import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { IBattle } from '~/src/graphql/domain/battle'
import { ICurse } from '~/src/graphql/domain/curse'

interface IBattleStore {
    battleInProgress: IBattle | null
    curse: ICurse | null
    shakeCurseImage: boolean
}

@Module({
  name: 'battle',
  stateFactory: true,
  namespaced: true
})
export default class BattleStore extends VuexModule implements IBattleStore {
  battleInProgress: IBattle | null = null
  curse: ICurse | null = null
  shakeCurseImage = false

  @Mutation
  setBattleInProgress (battle: IBattle | null) {
    this.battleInProgress = battle
  }

  @Mutation
  setPlayerHP (hp: number) {
    const copied: IBattle = JSON.parse(JSON.stringify(this.battleInProgress))
    copied.playerHP = hp
    this.battleInProgress = copied
  }

  @Mutation
  setCurse (curse: ICurse | null) {
    this.curse = curse
  }

  @Mutation
  setShakeCurseImage (shake: boolean) {
    this.shakeCurseImage = shake
  }
}

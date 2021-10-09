function enemy(action){
    const ACTIONS = {
        walk: 'I am walking and I am rude',
        run: 'I am running',
        fight: 'I will find you, I will kill you, Hero!'
    }
    return ACTIONS[action];
}

module.exports.enemy = enemy; /*менш зручний варіант експорту*/
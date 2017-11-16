let socioRestricoes= [
    {
        id_socio_restricao: "238",
        fk_socio: "839",
        fk_documento: "388",
        fk_restricao: "1",
        fk_poderes_grupo_item: "213",
        ds_restricao: "expressаmente proibido",
        ds_sentence: "expressаmente proibido o uso da denominação social em objetos aheios aos  interesses da Sociedade, tais como avais , endosso, fianças ou qualquer outro  favorecimento a terceiro.",
        nr_score: 0.982381
    },
    {
        id_socio_restricao: "239",
        fk_socio: "839",
        fk_documento: "388",
        fk_restricao: "1",
        fk_poderes_grupo_item: "216",
        ds_restricao: "expressаmente proibido",
        ds_sentence: "expressаmente proibido o uso da denominação social em objetos aheios aos  interesses da Sociedade, tais como avais , endosso, fianças ou qualquer outro  favorecimento a terceiro.",
        nr_score: 0.982381
    },
    {
        id_socio_restricao: "240",
        fk_socio: "840",
        fk_documento: "388",
        fk_restricao: "1",
        fk_poderes_grupo_item: "213",
        ds_restricao: "expressаmente proibido",
        ds_sentence: "expressаmente proibido o uso da denominação social em objetos aheios aos  interesses da Sociedade, tais como avais , endosso, fianças ou qualquer outro  favorecimento a terceiro.",
        nr_score: 0.737168
    },
    {
        id_socio_restricao: "241",
        fk_socio: "840",
        fk_documento: "388",
        fk_restricao: "1",
        fk_poderes_grupo_item: "216",
        ds_restricao: "expressаmente proibido",
        ds_sentence: "expressаmente proibido o uso da denominação social em objetos aheios aos  interesses da Sociedade, tais como avais , endosso, fianças ou qualquer outro  favorecimento a terceiro.",
        nr_score: 0.737168
    }
]

socioRestricoes.map((restricao, index) => {
        
    if (restricao.fk_socio == "839") {
        socioRestricoes.splice(index, 1)
    }
})

console.log(socioRestricoes.length)

let apps = [{id:34,name:'My App',another:'thing'},{id:37,name:'My New App',another:'things'},
{id:34,name:'Chien',another:'as'},{id:39,name:'Mirna',another:'fssd'}];

var removeIndex = apps.filter(function(item) { return item.id == 34; });

apps.map((app, index) => {

    if (app.id == 34) {
        apps.splice(index, 1)
    }
})

console.log(apps.length)
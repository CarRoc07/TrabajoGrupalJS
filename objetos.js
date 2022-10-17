
class producto   {
    constructor(id, tipo, name, precio, comentario) {
        this.id = id;
        this.tipo = tipo;
        this.name = name;
        this.precio = precio;
        this.comentario = comentario;
        this.popular = popular;
    }
}

let _burguesa = new producto (1, 'hamburguesa', 'Ham-burguesa', 1100, 'Clase alta', true);
let _explosive = new producto (2, 'hamburguesa', 'Explosive', 1560, 'Doble bomba', false);
let _family = new producto (3, 'hamburguesa', 'Familiy-game', 2260, 'Para repartir', false);
let _meat = new producto (4, 'hamburguesa', '!Meat', 1260, 'Vegana y poderosa', true);
let _peppa = new producto (5, 'hamburguesa', 'Peppa-pig', 1200, 'La cerdita', false);
let _chicken = new producto (6, 'hamburguesa', 'Chicken-little', 1000, 'De pollo y cositas', true);
let _muzza = new producto (7, 'pizza', 'Muzzaraña', 950, 'Muzza inspiradora', true);
let _morron = new producto (8, 'pizza', 'Joe-Morrone', 1050, 'Pizza punk', false);
let _tropi = new producto (9, 'pizza', 'Tropicalisima', 1220, 'Sabor y fiesta', false);
let _fuga = new producto (10, 'pizza', 'La-fuga', 1150, 'Fugazzeta del amor', false);
let _rucula= new producto (11, 'pizza', 'Rucu-jam', 1380, 'Sabor y fiesta', true);
let _roquefort= new producto (12, 'pizza', 'Don-Roque', 1260, 'Roquefort a morir', false);
let _solari = new producto (13, 'fritas', 'Solari', 600, 'Papa y nada mas', false);
let _francisco= new producto (14, 'fritas', 'Papas-Francisco', 880, 'Argentinas y celestiales', true);
let _panceta= new producto (15, 'fritas', 'Panza-verde', 850, 'Panceta y verdeo', false);
let _cheddar= new producto (16, 'fritas', 'Cheese-potato', 900, 'Cheddar y mas cheddar', true);
let _gramajo= new producto (17, 'fritas', 'Gramajo', 1100, 'Mas revuelto q tu vida', true);
let _horno= new producto (18, 'fritas', 'Oven', 1100, '+ sanas, = de ricas', false);
let _wrap_carne = new producto (19, 'wraps', 'Meat-wrap', 1100, 'A la antigua', true);
let _wrap_cerdo = new producto (20, 'wraps', 'Pig-wrap', 1100, 'Si la vaca ya te harto', false);
let _wrap_pollo = new producto (21, 'wraps', 'Chicken_wrap', 1100, 'Para cambiar un poco', false);
let _wrap_mixto = new producto (22, 'wraps', 'Mix-wrap', 1300, 'Si no podes elegir uno', true);
let _wrap_vegan = new producto (23, 'wraps', 'Vegan-wrap', 1250, 'Pet friendly', true);
let _batido_cherry = new producto (24, 'batidos', 'Cherry-bomb', 900, 'Cerecita', true);
let _batido_chocolate = new producto (25, 'batidos', 'Chocolate-lover', 900, 'Superclasico', true);
let _batido_vainilla = new producto (26, 'batidos', 'Vanilla-ice', 900, 'Ultra refresh', false);
let _batido_ddl = new producto (27, 'batidos', 'Sweet-heart', 900, 'Bombon de dulce de leche', true);
let _batido_crema = new producto (28, 'batidos', 'Creamy', 900, 'Suave y cremoso', false);


const _array_de_productos = [_burguesa, _explosive, _family, _meat, _peppa, _chicken, _muzza, 
_morron, _tropi, _fuga, _rucula, _roquefort, _solari, _francisco, _panceta, _cheddar, _gramajo, 
_horno, _wrap_carne, _wrap_cerdo, _wrap_pollo, _wrap_mixto, _wrap_vegan, _batido_cherry, _batido_chocolate, 
_batido_vainilla, _batido_ddl, _batido_crema];


console.log(_array_de_productos);
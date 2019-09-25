const ELEMENTS = [
	{ number: 1, name: "H" },
	{ number: 2, name: "He" },
	{ number: 3, name: "Li" },
	{ number: 4, name: "Be" },
	{ number: 5, name: "B" },
	{ number: 6, name: "C" },
	{ number: 7, name: "N" },
	{ number: 8, name: "O" },
	{ number: 9, name: "F" },
	{ number: 10, name: "Ne" },
	{ number: 11, name: "Na" },
	{ number: 12, name: "Mg" },
	{ number: 13, name: "Al" },
	{ number: 14, name: "Si" },
	{ number: 15, name: "P" },
	{ number: 16, name: "S" },
	{ number: 17, name: "Cl" },
	{ number: 18, name: "Ar" },
	{ number: 19, name: "K" },
	{ number: 20, name: "Ca" },
	{ number: 21, name: "Sc" },
	{ number: 22, name: "Ti" },
	{ number: 23, name: "V" },
	{ number: 24, name: "Cr" },
	{ number: 25, name: "Mn" },
	{ number: 26, name: "Fe" },
	{ number: 27, name: "Co" },
	{ number: 28, name: "Ni" },
	{ number: 29, name: "Cu" },
	{ number: 30, name: "Zn" },
	{ number: 31, name: "Ga" },
	{ number: 32, name: "Ge" },
	{ number: 33, name: "As" },
	{ number: 34, name: "Se" },
	{ number: 35, name: "Br" },
	{ number: 36, name: "Kr" },
	{ number: 37, name: "Rb" },
	{ number: 38, name: "Sr" },
	{ number: 39, name: "Y" },
	{ number: 40, name: "Zr" },
	{ number: 41, name: "Nb" },
	{ number: 42, name: "Mo" },
	{ number: 43, name: "Tc" },
	{ number: 44, name: "Ru" },
	{ number: 45, name: "Rh" },
	{ number: 46, name: "Pd" },
	{ number: 47, name: "Ag" },
	{ number: 48, name: "Cd" },
	{ number: 49, name: "In" },
	{ number: 50, name: "Sn" },
	{ number: 51, name: "Sb" },
	{ number: 52, name: "Te" },
	{ number: 53, name: "I" },
	{ number: 54, name: "Xe" },
	{ number: 56, name: "Cs" },
	{ number: 57, name: "La" },
	{ number: 58, name: "Ce" },
	{ number: 59, name: "Pr" },
	{ number: 60, name: "Nd" },
	{ number: 61, name: "Pm" },
	{ number: 62, name: "Sm" },
	{ number: 63, name: "Eu" },
	{ number: 64, name: "Gd" },
	{ number: 65, name: "Tb" },
	{ number: 66, name: "Dy" },
	{ number: 67, name: "Ho" },
	{ number: 68, name: "Er" },
	{ number: 69, name: "Tm" },
	{ number: 70, name: "Yb" },
	{ number: 71, name: "Lu" },
	{ number: 72, name: "Hf" },
	{ number: 73, name: "Ta" },
	{ number: 74, name: "W" },
	{ number: 75, name: "Re" },
	{ number: 76, name: "Os" },
	{ number: 77, name: "Ir" },
	{ number: 78, name: "Pt" },
	{ number: 79, name: "Au" },
	{ number: 80, name: "Hg" },
	{ number: 81, name: "Tl" },
	{ number: 82, name: "Pb" },
	{ number: 83, name: "Bi" },
	{ number: 84, name: "Po" },
	{ number: 85, name: "At" },
	{ number: 86, name: "Rn" },
	{ number: 87, name: "Fr" },
	{ number: 88, name: "Ra" },
	{ number: 89, name: "Ac" },
	{ number: 90, name: "Th" },
	{ number: 91, name: "Pa" },
	{ number: 92, name: "U" },
	{ number: 93, name: "Np" },
	{ number: 94, name: "Pu" },
	{ number: 95, name: "Am" },
	{ number: 96, name: "Cm" },
	{ number: 97, name: "Bk" },
	{ number: 98, name: "Cf" },
	{ number: 99, name: "Es" },
	{ number: 100, name: "Fm" },
	{ number: 101, name: "Md" },
	{ number: 102, name: "No" },
	{ number: 103, name: "Lr" },
	{ number: 104, name: "Rf" },
	{ number: 105, name: "Db" },
	{ number: 106, name: "Sg" },
	{ number: 107, name: "Bh" },
	{ number: 108, name: "Hs" },
	{ number: 109, name: "Mt" },
	{ number: 110, name: "Ds" },
	{ number: 111, name: "Rg" },
	{ number: 112, name: "Cn" },
	{ number: 113, name: "Nh" },
	{ number: 114, name: "Fl" },
	{ number: 115, name: "Mc" },
	{ number: 116, name: "Lv" },
	{ number: 117, name: "Ts" },
	{ number: 118, name: "Og" },
]

const CONFIGURATION = [
	{ energy: 1, orbital_type: "s", total_electrons: 2 },
	{ energy: 2, orbital_type: "s", total_electrons: 2 },
	{ energy: 2, orbital_type: "p", total_electrons: 6 },
	{ energy: 3, orbital_type: "s", total_electrons: 2 },
	{ energy: 3, orbital_type: "p", total_electrons: 6 },
	{ energy: 4, orbital_type: "s", total_electrons: 2 },
	{ energy: 3, orbital_type: "d", total_electrons: 10 },
	{ energy: 4, orbital_type: "p", total_electrons: 6 },
	{ energy: 5, orbital_type: "s", total_electrons: 2 },
	{ energy: 4, orbital_type: "d", total_electrons: 10 },
	{ energy: 5, orbital_type: "p", total_electrons: 6 },
	{ energy: 6, orbital_type: "s", total_electrons: 2 },
	{ energy: 4, orbital_type: "f", total_electrons: 14 },
	{ energy: 5, orbital_type: "d", total_electrons: 10 },
	{ energy: 6, orbital_type: "p", total_electrons: 6 },
	{ energy: 7, orbital_type: "s", total_electrons: 2 },
	{ energy: 5, orbital_type: "f", total_electrons: 14 },
	{ energy: 6, orbital_type: "d", total_electrons: 10 },
	{ energy: 7, orbital_type: "p", total_electrons: 6 },
	{ energy: 8, orbital_type: "s", total_electrons: 2 },
]

function find_element() {
	var atomic_number = Number(document.querySelector("#atomic_number").value);

	if (atomic_number > 118) alert("Please enter a valid atomic number (1-118).");
	var element_name = ELEMENTS.find((element) => element.number === atomic_number).name;
	return { name: element_name, number: atomic_number };
}

function calculate() {
	const electron_number = find_element().number;
	const element_name = find_element().name;

	var remaining_electrons = electron_number;
	var electron_count = 0;

	var config_object = [];

	for (let conf of CONFIGURATION) {
		electron_count += conf.total_electrons;

		if (remaining_electrons > conf.total_electrons) {
			config_object.push(conf);
			remaining_electrons -= conf.total_electrons;
		}
		else {
			var temp_conf = { energy: conf.energy, orbital_type: conf.orbital_type, total_electrons: remaining_electrons };

			config_object.push(temp_conf);
			break;
		}
	}

	if (
		config_object[config_object.length - 1].orbital_type +
		config_object[config_object.length - 1].total_electrons === "d4"
		||
		(config_object[config_object.length - 1].orbital_type +
			config_object[config_object.length - 1].total_electrons === "d9")) {

		config_object[config_object.length - 2].total_electrons--;
		config_object[config_object.length - 1].total_electrons++;
	}

	// Convert config_object into a config_string
	var config_string = config_object.map((obj) => obj.energy + obj.orbital_type + "^" + obj.total_electrons).join(" ");
	document.querySelector("#element_name").innerHTML = element_name;
	document.querySelector("#configuration").innerHTML = config_string;
}
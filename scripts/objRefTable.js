const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.scrollto,
		C3.Behaviors.EightDir,
		C3.Behaviors.jumpthru,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Behaviors.Fade,
		C3.Plugins.Text,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{CentrarEm: 0},
	{"8Direções": 0},
	{PularAtravés: 0},
	{Plataforma: 0},
	{Sprite: 0},
	{Sólido: 0},
	{Esmaecer: 0},
	{Sprite2: 0},
	{Sprite3: 0},
	{Sprite4: 0},
	{Sprite5: 0},
	{Sprite6: 0},
	{Texto: 0},
	{Sprite7: 0},
	{Sprite8: 0},
	{Texto2: 0},
	{Sprite9: 0},
	{MOEDAS: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	Sprite3: class extends self.ISpriteInstance {},
	Sprite4: class extends self.ISpriteInstance {},
	Sprite5: class extends self.ISpriteInstance {},
	Sprite6: class extends self.ISpriteInstance {},
	Texto: class extends self.ITextInstance {},
	Sprite7: class extends self.ISpriteInstance {},
	Sprite8: class extends self.ISpriteInstance {},
	Texto2: class extends self.ITextInstance {},
	Sprite9: class extends self.ISpriteInstance {}
}
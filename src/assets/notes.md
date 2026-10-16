## SIDEBAR BUTTONS

```jsx
const sidebarButtons = [
  {
    Icon: Box,
    label: "Inventory",
    content: (
      <div className="grid grid-cols-1 gap-3 ">
        {Object.entries(carOptions).map(([key, car]) => (
          <button
            key={key}
            onClick={() => onSelectCar(key)}
            className={`p-4 rounded-xl border-2 transition-all text-left flex justify-between items-center group ${
              activeCarKey === key
                ? "border-emerald-600 bg-emerald-50"
                : "border-zinc-100 bg-white hover:border-zinc-200"
            }`}
          >
            <div>
              <p
                className={`font-bold ${activeCarKey === key ? "text-emerald-900" : "text-zinc-800"}`}
              >
                {car.name}
              </p>
              <p className="text-xs text-zinc-500">{car.desc}</p>
            </div>
            {activeCarKey === key && (
              <CheckCircle2 size={18} className="text-emerald-600" />
            )}
          </button>
        ))}
      </div>
    ),
  },
  {
    Icon: Sliders,
    label: "Visuals",
    content: (
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex justify-between">
            <label className="text-xs font-bold text-zinc-600 uppercase tracking-wider">
              Rotation Speed
            </label>
            <span className="text-xs font-mono text-emerald-600">
              {rotateSpeed}x
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="5"
            step="0.1"
            value={rotateSpeed}
            onChange={(e) => setRotateSpeed(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />
        </div>

        <div className="flex items-center justify-between p-3 bg-zinc-50 rounded-lg">
          <span className="text-sm font-medium">Show Studio Shadows</span>
          <div className="w-10 h-5 bg-emerald-600 rounded-full relative">
            <div className="absolute right-1 top-1 size-3 bg-white rounded-full shadow-sm" />
          </div>
        </div>

        <button className="w-full py-3 bg-zinc-900 text-white text-sm font-bold rounded-xl hover:bg-zinc-800 transition">
          Apply Custom Theme
        </button>
      </div>
    ),
  },
  {
    Icon: Zap,
    label: "Actions",
    content: (
      <div className="grid grid-cols-1 gap-2">
        {["Schedule Test Drive", "Get Trade-In Value", "Compare Models"].map(
          (action) => (
            <button
              key={action}
              className="w-full px-4 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-sm font-semibold rounded-xl transition text-left"
            >
              {action}
            </button>
          ),
        )}
      </div>
    ),
  },
  {
    Icon: Calendar,
    label: "Schedule",
    content: (
      <div className="space-y-4 text-center py-4">
        <div className="size-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
          <Calendar size={32} />
        </div>
        <p className="text-sm text-zinc-500">
          No appointments scheduled for the {carOptions[activeCarKey].name}.
        </p>
        <button className="w-full py-3 border-2 border-emerald-600 text-emerald-600 text-sm font-bold rounded-xl hover:bg-emerald-50">
          Book Viewing
        </button>
      </div>
    ),
  },
];
```

## BYD CAR MODEL:

```html
<!-- 
Author: Ddiaz Design (https://sketchfab.com/ddiaz-design)

License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)

Source: https://sketchfab.com/3d-models/2024-byd-sealion-7-4eb4a93ae47b47f4b213dd89a0ad89f0 

-->
```

## HYUNDAI CAR MODEL:

```html
<!-- 

Author: KOElkastasbers (https://sketchfab.com/koelkastasbers)

License: SKETCHFAB Standard (https://sketchfab.com/licenses)

Source: https://sketchfab.com/3d-models/2024-hyundai-santa-fe-a1ee29b80c844b13ba56ac7e28971a53

Title: 2024 Hyundai Santa Fe 

-->
```

## VOLVO CAR MODEL:

```html
<!-- 
 
 Author: Ddiaz Design (https://sketchfab.com/ddiaz-design)

License: CC-BY-NC-SA-4.0 (http://creativecommons.org/licenses/by-nc-sa/4.0/)

Source: https://sketchfab.com/3d-models/2020-polestar-2-24f78b3dc6e84fe0b0b2afdb43d547ea

Title: 2020 Polestar 2 

-->
```

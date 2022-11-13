declare type toggle = "toggle"
declare type range = "range"
declare type group = "group"
declare type ItemType = group | toggle | range

declare interface OptionsItem {
    name?: string
    type: ItemType
    desc?: string
}

declare interface GroupItem extends OptionsItem {
    type: group,
    args: {
        [P: string]: OptionsItem
    }
}

declare interface ToggleItem extends OptionsItem {
    type: toggle
    get?: (this: void, info: string) => boolean
    set?: (this: void, info: string, value: boolean) => void
}

declare interface RangeItem extends OptionsItem {
    min: number,
    max: number,
    step?: number
    get?: (this: void, info: string) => number
    set?: (this: void, info: string, value: number) => void
}

declare interface IAceConfig {
    RegisterOptionsTable(name: string, options: GroupItem): void
}

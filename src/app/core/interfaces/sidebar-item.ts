export interface ISidebarItem{
    ID: number;
    Title: string;
    Icon: string;
    Path: string;
    Children: Array<ISidebarItem>;
    ShowChildren:boolean
}
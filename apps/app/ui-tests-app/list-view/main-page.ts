import { EventData } from "tns-core-modules/data/observable";
import { SubMainPageViewModel } from "../sub-main-page-view-model";
import { WrapLayout } from "tns-core-modules/ui/layouts/wrap-layout";
import { Page } from "tns-core-modules/ui/page";

export function pageLoaded(args: EventData) {
    const page = <Page>args.object;
    const wrapLayout = <WrapLayout>page.getViewById("wrapLayoutWithExamples");
    page.bindingContext = new SubMainPageViewModel(wrapLayout, loadExamples());
}

export function loadExamples() {
    const examples = new Map<string, string>();    
    examples.set("list-view-templates", "list-view/list-view");
    examples.set("images-template", "list-view/images-template");
    examples.set("bindings", "list-view/listview-binding");
    examples.set("listview-bg-separator-color", "list-view/listview-bg-separator-color");
    examples.set("csslv", "list-view/csslv");

    return examples;
}

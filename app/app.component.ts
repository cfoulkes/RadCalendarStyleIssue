import { Component } from "@angular/core";
import { RadCalendarComponent } from "nativescript-ui-calendar/angular";
import { RadCalendar, CalendarViewMode, CalendarSelectionMode, CalendarMonthViewStyle, DayCellStyle, CellStyle } from "nativescript-ui-calendar";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 

    viewMode = CalendarViewMode.Month;
    monthViewStyle: CalendarMonthViewStyle;

    ngOnInit() {
        this.monthViewStyle = new CalendarMonthViewStyle();
        this.monthViewStyle.showTitle = false;
        this.monthViewStyle.selectionShape = "Round";
        this.monthViewStyle.selectionShapeSize = 20;
        this.monthViewStyle.selectionShapeColor = "Red";
    }

    setMonth(mode) {
        this.viewMode = mode;
    }
}

<ng-container matColumnDef="Account">
  <mat-header-cell *matHeaderCellDef style="width: 150px; background-color: #ba55d3; color:white">Account</mat-header-cell>
  <mat-cell *matCellDef="let row" style="width: 150px;" class="action-cell" [contentEditable]="true">{{row.Account}}</mat-cell>
</ng-container>

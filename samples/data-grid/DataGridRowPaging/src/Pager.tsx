import * as React from 'react';

import { LocalDataSource } from 'igniteui-react-core';
import { SortDescription } from 'igniteui-react-core';
import { IgrColumnSortDescriptionCollection } from 'igniteui-react-grids';
import { IgrColumnGroupDescriptionCollection } from 'igniteui-react-grids';
import { IgrFilterExpressionCollection } from 'igniteui-react-core';

import './Pager.css';

/**
 * Interface for the Pager component's properties.
 */
export interface IPagerProps {
    /**
     * The data to page through.
     */
    dataSource: any[];
    /**
     * The number of records per page.
     */
    pageSize: number;
    /**
     * Notifies when the page has changed and what data is on that page.
     */
    pagedChanged?: (pageNumber: number, data: any[]) => void;
}

/**
 * Interface for the Pager component's state.
 */
interface IPagerState {
    /**
     * The internal data source the pager will use. This lets it easily handle sorting,
     * grouping and filtering the data.
     */
    dataSource: LocalDataSource;
    /**
     * How many pages there are for the current data source.
     */
    pageCount: number;
    /**
     * The current page of data the pager is on.
     */
    pageNumber: number;
    /**
     * How many sort descriptions are present in the data source.
     */
    sortCount: number;
    /**
     * How many group descriptions are present in the data source.
     */
    groupCount: number;
    /**
     * How many filter expressions are present in the data source.
     */
    filterCount: number;
}

/**
 * This component is designed to be used in conjunction with the IgrLiveGrid component
 * to provide a small paged view of available data.
 */
export class Pager extends React.Component<IPagerProps> {

    /**
     * Defining a version of the component's state property with the
     * IPagerState interface.
     */
    public readonly state: IPagerState = {
        dataSource: new LocalDataSource(),
        pageCount: 0,
        pageNumber: 1,
        sortCount: 0,
        groupCount: 0,
        filterCount: 0
    }

    /**
     * Constructs a new Pager component.
     * @param props The properties for the Pager.
     */
    constructor(props: IPagerProps) {
        super(props);

        // Don't want to emit these in our internal datasource.
        this.state.dataSource.shouldEmitSectionFooters = false;
        this.state.dataSource.shouldEmitSectionHeaders = false;
        this.state.dataSource.shouldEmitShiftedRows = false;
    }

    public componentDidMount() {
        // data was provided initially so update the pager state
        if (this.props.dataSource.length > 0) {
            this.state.dataSource.itemsSource = this.props.dataSource;

            const count = Math.round(this.props.dataSource.length / this.props.pageSize);
            this.setState({ pageCount: count, pageNumber: 1 });
        }
    }

    public componentDidUpdate(previousProps: IPagerProps, previousState: IPagerState) {
        // property changes
        if (previousProps.dataSource !== this.props.dataSource) {
            this.state.dataSource.itemsSource = this.props.dataSource;

            // new data so calculate a new page count and update the state.
            const count = Math.round(this.state.dataSource.actualCount / this.props.pageSize);
            this.setState({ pageCount: count, pageNumber: 1 });
        }

        // if any of these state properties changed then we need to provide new data.
        if (previousState.pageNumber !== this.state.pageNumber ||
            previousState.pageCount !== this.state.pageCount || 
            previousState.sortCount !== this.state.sortCount ||
            previousState.groupCount !== this.state.groupCount ||
            previousState.filterCount !== this.state.filterCount) {
            const pageData = this.getPage(this.state.pageNumber);
            if (pageData.length > 0) {
                this.notifyPageChanged(this.state.pageNumber, pageData);
            }
        }
    }

    public render() {
        const leftSideBtnClasses = "icon-button " + (this.isButtonDisabled("left") ? "icon-button-disable" : "");
        const rightSideBtnClasses = "icon-button " + (this.isButtonDisabled("right") ? "icon-button-disable" : "");
        return (
            <div className="pager-root">
                <div className={leftSideBtnClasses} onClick={this.firstPage}>
                    <i className="material-icons">first_page</i>
                </div>
                <div className={leftSideBtnClasses} onClick={this.previousPage}>
                    <i className="material-icons">chevron_left</i>
                </div>
                <div className="pager-text">
                    {this.state.pageNumber} of {this.state.pageCount}
                </div>
                <div className={rightSideBtnClasses} onClick={this.nextPage}>
                    <i className="material-icons">chevron_right</i>
                </div>
                <div className={rightSideBtnClasses} onClick={this.lastPage}>
                    <i className="material-icons">last_page</i>
                </div>
            </div>
        );
    }

    /**
     * Update the pager's internal data source with sorting.
     * @param sortDescriptions The latest sort descriptions to apply.
     */
    public applySorts(sortDescriptions: IgrColumnSortDescriptionCollection) {
        this.state.dataSource.sortDescriptions.clear();
        for (let i = 0; i < sortDescriptions.count; i++) {
            const sd = sortDescriptions.item(i);
            this.state.dataSource.sortDescriptions.add(SortDescription.create(sd.propertyPath, sd.sortDirection));
        }
        this.update(true);
    }
    /**
     * Update the pager's internal data source with grouping.
     * @param groupDescriptions The latest group descriptions to apply.
     */
    public applyGroups(groupDescriptions: IgrColumnGroupDescriptionCollection) {
        this.state.dataSource.groupDescriptions.clear();
        for (let i = 0; i < groupDescriptions.count; i++) {
            const gd = groupDescriptions.item(i);
            this.state.dataSource.groupDescriptions.add(SortDescription.create(gd.propertyPath, gd.sortDirection));
        }
        this.update(true);
    }
    /**
     * Update the pager's internal data source with filtering.
     * @param filterExpressions The latest filters to apply.
     */
    public applyFilters(filterExpressions: IgrFilterExpressionCollection) {
        this.state.dataSource.filterExpressions.clear();
        for (let i = 0; i < filterExpressions.size(); i++) {
            const fe = filterExpressions.get(i);
            this.state.dataSource.filterExpressions.add(fe);
        }
        this.update(true);
    }

    /**
     * Click handler for the first page button.
     */
    private firstPage = () => {
        this.setState({ pageNumber: 1 });
    }
    /**
     * Click handler for the previous page button.
     */
    private previousPage = () => {
        this.setState({ pageNumber: Math.max(this.state.pageNumber - 1, 1) });
    }
    /**
     * Click handler for the next page button.
     */
    private nextPage = () => {
        this.setState({ pageNumber: Math.min(this.state.pageNumber + 1, this.state.pageCount) });
    }
    /**
     * Click handler for the last page button.
     */
    private lastPage = () => {
        this.setState({ pageNumber: this.state.pageCount });
    }
    /**
     * Quick helper to determine if one of the paging buttons is disabled or not.
     */
    private isButtonDisabled = (which: string) : boolean => {
        switch (which) {
            case "left": return this.state.pageNumber <= 1;
            case "right": return this.state.pageNumber === this.state.pageCount;
            default: return false;
        }
    }

    /**
     * Notifies about what the data is for the current page.
     * @param pageNumber The page number to report.
     * @param data The data for the current page.
     */
    private notifyPageChanged(pageNumber: number, data: any[]) {
        if (this.props.pagedChanged) {
            this.props.pagedChanged(pageNumber, data);
        }
    }

    /**
     * Helper function to get data for a specific page.
     * @param pageNumber The page to get data for.
     */
    private getPage(pageNumber: number) : any[] {
        const data = [];

        if (this.state.dataSource) {
            const pageStart = (pageNumber - 1) * this.props.pageSize;
            for (let i = pageStart; i < pageStart + this.props.pageSize; i++) {
                if (i > this.state.dataSource.actualCount - 1) {
                    break;
                }
                const item = this.state.dataSource.getItemAtIndex(i);
                data.push(item);
            }
        }
        
        return data;
    }
    /**
     * Updates the pager and notifies about the data for the current page.
     * @param flush Whether to flush the internal LocalDataSource or not.
     * @param notify Whether this update needs to notify or not.
     */
    private update(flush?: boolean) {
        if (flush) {
            // flushing the datasource is required when adding filter, sort and group objects to it
            // so they immediately get processed.  Otherwise we'll continue working with old data.
            this.state.dataSource.flushAutoRefresh();
        }
        
        const count = Math.round(this.state.dataSource.actualCount / this.props.pageSize);
        const page = Math.max(Math.min(this.state.pageNumber, count), 1);

        this.setState({
            pageCount: count,
            pageNumber: page,
            sortCount: this.state.dataSource.sortDescriptions.size(),
            groupCount: this.state.dataSource.groupDescriptions.size(),
            filterCount: this.state.dataSource.filterExpressions.size()
        });
    }
}
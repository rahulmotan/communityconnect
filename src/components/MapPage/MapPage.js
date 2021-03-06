import React from 'react';

import ResultList from './Map/ResultList';
import OrganizationMap from './Map/OrganizationMap';
import styles from './MapPage.module.css';
import { SplitScreenSlidingPane } from '../SlidingPane/SplitScreenSlidingPane';


const AdminPage = ({currentPosition}) => {

    return (
        <div id={styles.container}>
          <SplitScreenSlidingPane>
              <ResultList
                ref={instance => { this.resultListItem = instance }}
                cardClick={this.cardClick}
                currentPos={currentPosition}
                fullWidth={true}
              />
          </SplitScreenSlidingPane>
          <div className={styles.staticPane}>
              <OrganizationMap
                center={currentPosition ? currentPosition.coordinates : null}
                scrollToElement={this.scrollToElement}
                ref={instance => { this.mapItem = instance }}
              />
          </div>
        </div>
    );
}

export default AdminPage;

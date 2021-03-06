'use strict';

import BarController from './controller.bar';
import defaults from '../core/core.defaults';

defaults._set('horizontalBar', {
	hover: {
		mode: 'index',
		axis: 'y'
	},

	scales: {
		x: {
			type: 'linear',
			position: 'bottom',
			beginAtZero: true
		},
		y: {
			type: 'category',
			position: 'left',
			offset: true,
			gridLines: {
				offsetGridLines: true
			}
		}
	},

	elements: {
		rectangle: {
			borderSkipped: 'left'
		}
	},

	tooltips: {
		mode: 'index',
		axis: 'y'
	}
});

defaults._set('datasets', {
	horizontalBar: {
		categoryPercentage: 0.8,
		barPercentage: 0.9
	}
});

export default BarController.extend({
	/**
	 * @private
	 */
	_getValueScaleId: function() {
		return this._cachedMeta.xAxisID;
	},

	/**
	 * @private
	 */
	_getIndexScaleId: function() {
		return this._cachedMeta.yAxisID;
	}
});

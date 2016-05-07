'use strict';

var componentDataService = require('../dataservices/component.dataservice');

// View model used to manage components of a specified league
function ConfigurationLeagueViewModel(league, items) {
    var isSelected = ko.observable(false);
    
    function select() {
        items().forEach(function(item){ item.isSelected(false); });
        isSelected(true);
        
        componentDataService.getLeagueResults(league.code).done(function(data){
            $('#content-results').html(data);
        });
        
        componentDataService.getLeagueTable(league.code).done(function(data){
            $('#content-table').html(data);
        });
        
        componentDataService.getLeagueScorers(league.code).done(function(data){
            $('#content-scorers').html(data);
        });
        
        componentDataService.getLeagueAssists(league.code).done(function(data){
            $('#content-assists').html(data);
        });
    }
    
    return {
        league: league,
        isSelected: isSelected,
        select: select
    };
}

module.exports = ConfigurationLeagueViewModel;
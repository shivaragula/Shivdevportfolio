import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectFilters = ({ 
  filters, 
  activeFilters, 
  onFilterChange, 
  onClearFilters, 
  projectCount 
}) => {
  const filterCategories = [
    {
      key: 'type',
      label: 'Project Type',
      icon: 'FolderOpen',
      options: filters?.types || []
    },
    {
      key: 'technology',
      label: 'Technology',
      icon: 'Code',
      options: filters?.technologies || []
    },
    {
      key: 'complexity',
      label: 'Complexity',
      icon: 'TrendingUp',
      options: filters?.complexities || []
    },
    {
      key: 'status',
      label: 'Status',
      icon: 'Activity',
      options: filters?.statuses || []
    }
  ];

  const hasActiveFilters = Object.values(activeFilters)?.some(filterArray => filterArray?.length > 0);

  const handleFilterToggle = (category, value) => {
    const currentFilters = activeFilters?.[category] || [];
    const newFilters = currentFilters?.includes(value)
      ? currentFilters?.filter(item => item !== value)
      : [...currentFilters, value];
    
    onFilterChange(category, newFilters);
  };

  const isFilterActive = (category, value) => {
    return (activeFilters?.[category] || [])?.includes(value);
  };

  return (
    <motion.div
      className="bg-card rounded-xl shadow-elevation p-6 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon name="Filter" size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-text-primary">Filter Projects</h3>
            <p className="text-sm text-text-secondary">
              Showing {projectCount} project{projectCount !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
        
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClearFilters}
            iconName="X"
            iconPosition="left"
            iconSize={14}
            className="text-text-secondary hover:text-error"
          >
            Clear All
          </Button>
        )}
      </div>
      {/* Filter Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filterCategories?.map((category) => (
          <div key={category?.key} className="space-y-3">
            <div className="flex items-center space-x-2">
              <Icon name={category?.icon} size={16} className="text-text-secondary" />
              <h4 className="font-medium text-text-primary text-sm">{category?.label}</h4>
            </div>
            
            <div className="space-y-2">
              {category?.options?.map((option) => {
                const isActive = isFilterActive(category?.key, option);
                return (
                  <button
                    key={option}
                    onClick={() => handleFilterToggle(category?.key, option)}
                    className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-primary text-primary-foreground shadow-sm'
                        : 'bg-surface text-text-secondary hover:bg-muted hover:text-text-primary'
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="mt-6 pt-6 border-t border-border">
          <div className="flex items-center space-x-2 mb-3">
            <Icon name="Tag" size={16} className="text-text-secondary" />
            <span className="text-sm font-medium text-text-primary">Active Filters:</span>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {Object.entries(activeFilters)?.map(([category, values]) =>
              values?.map((value) => (
                <span
                  key={`${category}-${value}`}
                  className="inline-flex items-center space-x-1 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full"
                >
                  <span>{value}</span>
                  <button
                    onClick={() => handleFilterToggle(category, value)}
                    className="hover:bg-primary/20 rounded-full p-0.5 transition-colors duration-200"
                  >
                    <Icon name="X" size={12} />
                  </button>
                </span>
              ))
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default ProjectFilters;
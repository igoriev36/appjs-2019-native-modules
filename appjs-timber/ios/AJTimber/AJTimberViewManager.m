// Copyright 2016-present 650 Industries. All rights reserved.

#import <AJTimber/AJTimberView.h>
#import <AJTimber/AJTimberViewManager.h>

@interface AJTimberViewManager ()

@property (nonatomic, weak) UMModuleRegistry *moduleRegistry;

@end

@implementation AJTimberViewManager

UM_EXPORT_MODULE(AppjsTimberViewManager);

- (UIView *)view
{
  return [[AJTimberView alloc] initWithModuleRegistry:_moduleRegistry];
}

- (NSString *)viewName
{
  return @"AppjsTimberView";
}

- (NSArray<NSString *> *)supportedEvents
{
  return @[@"onSomethingHappened"];
}

- (void)setModuleRegistry:(UMModuleRegistry *)moduleRegistry
{
  _moduleRegistry = moduleRegistry;
}

@end

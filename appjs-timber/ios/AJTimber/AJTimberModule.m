// Copyright 2018-present 650 Industries. All rights reserved.

#import <AJTimber/AJTimberModule.h>

@interface AJTimberModule ()

@property (nonatomic, weak) UMModuleRegistry *moduleRegistry;

@end

@implementation AJTimberModule

UM_EXPORT_MODULE(AppjsTimber);

- (void)setModuleRegistry:(UMModuleRegistry *)moduleRegistry
{
  _moduleRegistry = moduleRegistry;
}

UM_EXPORT_METHOD_AS(someGreatMethodAsync,
                    options:(NSDictionary *)options
                    resolve:(UMPromiseResolveBlock)resolve
                    reject:(UMPromiseRejectBlock)reject)
{
}

@end

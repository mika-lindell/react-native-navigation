#import "RNNBaseAnimator.h"
#import "RNNElementTransitionOptions.h"
#import <Foundation/Foundation.h>

@interface RNNElementAnimator : RNNBaseAnimator

- (instancetype)initWithTransitionOptions:(RNNTransitionOptions *)transitionOptions
                                     view:(UIView *)view
                            containerView:(UIView *)containerView;

- (NSMutableArray<id<RNNDisplayLinkAnimation>> *)createAnimations:
    (RNNElementTransitionOptions *)transitionOptions;

@end

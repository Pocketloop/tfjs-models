
/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

export interface ObjectDetectionClass {
  name: string;
  id: number;
  displayName: string;
}

export const CLASSES: {[key: string]: ObjectDetectionClass} = {
  3: {
    name: '/m/0k4j',
    id: 3,
    displayName: 'car',
  },
  6: {
    name: '/m/01bjv',
    id: 6,
    displayName: 'bus',
  },
  8: {
    name: '/m/07r04',
    id: 8,
    displayName: 'truck',
  },
};

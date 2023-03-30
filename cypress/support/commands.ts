import * as corner from './command/cornerCommand';
import * as projection from './command/projectionCommand';
import * as myDesigns from './command/myDesignsTab';
import * as utils from './command/utils';
import * as rightToolsPanel from './command/rightToolsPanel';
import * as line from './command/line';
import * as view from './command/view';
import * as edit from './command/edit';
import * as preferences from './command/preferences';
import * as toolsPanel from './command/toolsPanel';
import * as help from './command/help';
import * as auth from './command/auth';
import * as priceOrder from './command/priceOrder';
import * as rightTopButtons from './command/rightTopButtons';
import * as job from './command/job';
import * as file from './command/file';
import * as dimensionFields from './command/dimensionFields';
import 'cypress-file-upload';
import {openSignInModal} from "./command/auth";
import {openAddressTab, openSummaryTab} from "./command/job";
import {openLineDropdown} from "./command/line";

require('cypress-delete-downloads-folder').addCustomCommand();

declare global {
    namespace Cypress {
        interface Chainable {
            viewCompare: (fileUrl1 : string, fileUrl2 : string) => void,
            toSharedDesign: (designUrl : string) => void,
            selectAll: () => void,
            openSettings: () => void,
            login: (email? : string, password?: string) => void,
            registration: (name: string, lastName: string, company: string, email: string, phone : string,
                           street: string, city: string, zipCode: string, password: string,) => void,
            openPrice: (isWait : boolean) => void,
            exportFile: (fileExtension : string) => void,
            downloadDesign: () => void,
            sendFeedback: (email : string, description : string) => void,
            processOrder: () => void,
            isPreviewOpened: () => void,
            openFile: (path: string) => void,
            openFileAndUseSolution: (solution: string, initialDesignUrl: string, fixedDesignUrl: string, downloadedDesignUrl: string) => void,
            changeView: (view : string) => void,
            openSimplifyModal: () => void,
            openConvertSplineToArcModal: () => void,
            openContourModal: () => void,
            openGrooveModal: () => void,
            addGroove: (topDepth : string, width: string, horizontalDepth: string) => void
            replaceGroove: (topDepth : string, width: string, horizontalDepth: string) => void
            removeSelectedGroove: () => void
            scaleElement: (horizontally: string, vertically: string, isProportional? : boolean, isPreserveArcs? : boolean) => void
            findSimilar: () => void
            checkProjectionFromAllView: (correctPoints : Array<string>) => void
            openFeedbackModal: () => void
            openTechSupportModal: () => void
            changeZ: (zValue : string) => void
            selectConnected: () => void
            setContourSettings: (value: string, isOutside : boolean, isInside: boolean) => void
            confirmContour : (isWait: boolean) => void
            openDivideModal : () => void
            setDivideSettings : (value : string) => void
            confirmDivide : () => void
            cancelDivide : () => void
            tangent : () => void
            setConvertSplineToArcSettings : (value: string) => void
            confirmConvertSplineToArc : () => void
            mirror : (mode: string) => void
            deleteSelected : () => void
            intersectSelected : () => void
            changeDimension : () => void
            checkDimensionInTheField : (field: string, dimension: string) => void
            changeQuantityInPrice: (quantity: string) => void
            openQuantityModal: () => void
            changeQuantityInModal: (value: string) => void
            openMachineModal: () => void
            machineModalSwitchTab: (tab: string) => void
            setNearEdgeSettings: (nearEdge? : object) => void
            redo: () => void
            cut: () => void
            undo: () => void
            copy: () => void
            paste: () => void
            openPreferencesModal: () => void
            openCalibrateModal: () => void
            openAndConfirmModelBends: () => void
            enableRotateMode: () => void
            nudgeLeft: () => void
            nudgeRight: () => void
            nudgeDown: () => void
            nudgeUp: () => void
            rotateRight: () => void
            rotateLeft: () => void
            canvasDrawing : (tool: string, coordinates: Array<CoordinateType>) => void
            saveDesign : () => void
            cornerMath: (expression: string, result: string) => void,
            cornerCancelValue: () => void,
            cornerConfirmValue: () => void,
            cornerNegativeValue: (value: string, mode?: string) => void,
            cornerPositiveValue: (mode: string) => void,
            cornerSymbolValue: (mode?: string) => void,
            checkProjection: (correctPoint : string) => void;
            openSignInModal: () => void;
            canvasClick: (coordinates: Array<CoordinateType>) => void;
            openBendTab: () => void;
            openAddressTab: () => void;
            openSummaryTab: () => void;
            openLineDropdown: () => void;
        }
    }
}

//Input Fields
Cypress.Commands.add('checkDimensionInTheField', dimensionFields.checkDimensionInTheField)

//File
Cypress.Commands.add('exportFile', file.exportFile)
Cypress.Commands.add('toSharedDesign', file.toSharedDesign)

//Job
Cypress.Commands.add('openSettings', job.openSettings)
Cypress.Commands.add('openBendTab', job.openBendTab)
Cypress.Commands.add('openAddressTab', job.openAddressTab)
Cypress.Commands.add('openSummaryTab', job.openSummaryTab)

//Right top buttons
Cypress.Commands.add('openQuantityModal', rightTopButtons.openQuantityModal)
Cypress.Commands.add('changeQuantityInModal', rightTopButtons.changeQuantityInModal)

//Price / Order
Cypress.Commands.add('openPrice', priceOrder.openPrice)
Cypress.Commands.add('changeQuantityInPrice', priceOrder.changeQuantityInPrice)
Cypress.Commands.add('processOrder', priceOrder.processOrder)

//Auth
Cypress.Commands.add('login', auth.login)
Cypress.Commands.add('registration', auth.registration)
Cypress.Commands.add('openSignInModal', auth.openSignInModal)

//Help
Cypress.Commands.add('openFeedbackModal', help.openFeedbackModal)
Cypress.Commands.add('sendFeedback', help.sendFeedback)
Cypress.Commands.add('openTechSupportModal', help.openTechSupportModal)

//Tools Panel
Cypress.Commands.add('deleteSelected', toolsPanel.deleteSelected)
Cypress.Commands.add('intersectSelected', toolsPanel.intersectSelected)
Cypress.Commands.add('changeDimension', toolsPanel.changeDimension)

//Preferences
Cypress.Commands.add('openCalibrateModal', preferences.openCalibrateModal)
Cypress.Commands.add('openPreferencesModal', preferences.openPreferencesModal)

//Edit
Cypress.Commands.add('paste', edit.paste)
Cypress.Commands.add('copy', edit.copy)
Cypress.Commands.add('undo', edit.undo)
Cypress.Commands.add('redo', edit.redo)
Cypress.Commands.add('cut', edit.cut)
Cypress.Commands.add('selectAll', edit.selectAll)
Cypress.Commands.add('findSimilar', edit.findSimilar)

//View
Cypress.Commands.add('openAndConfirmModelBends', view.openAndConfirmModelBends)

//Line
Cypress.Commands.add('openLineDropdown', line.openLineDropdown)

Cypress.Commands.add('mirror', line.mirror)
Cypress.Commands.add('tangent', line.tangent)
Cypress.Commands.add('selectConnected', line.selectConnected)

Cypress.Commands.add('scaleElement', line.scaleElement)

Cypress.Commands.add('openContourModal', line.openContourModal)
Cypress.Commands.add('setContourSettings', line.setContourSettings)
Cypress.Commands.add('confirmContour', line.confirmContour)

Cypress.Commands.add('openDivideModal', line.openDivideModal)
Cypress.Commands.add('setDivideSettings', line.setDivideSettings)
Cypress.Commands.add('confirmDivide', line.confirmDivide)
Cypress.Commands.add('cancelDivide', line.cancelDivide)

Cypress.Commands.add('openConvertSplineToArcModal', line.openConvertSplineToArcModal)
Cypress.Commands.add('setConvertSplineToArcSettings', line.setConvertSplineToArcSettings)
Cypress.Commands.add('confirmConvertSplineToArc', line.confirmConvertSplineToArc)

Cypress.Commands.add('openSimplifyModal', line.openSimplifyModal)

Cypress.Commands.add('openMachineModal', line.openMachineModal)
Cypress.Commands.add('machineModalSwitchTab', line.machineModalSwitchTab)
Cypress.Commands.add('setNearEdgeSettings', line.setNearEdgeSettings)
Cypress.Commands.add('removeSelectedGroove', line.removeSelectedGroove)
Cypress.Commands.add('addGroove', line.addGroove)
Cypress.Commands.add('replaceGroove', line.replaceGroove)
Cypress.Commands.add('openGrooveModal', line.openGrooveModal)

//Right tools panel
Cypress.Commands.add('enableRotateMode', rightToolsPanel.enableRotateMode)
Cypress.Commands.add('nudgeUp', rightToolsPanel.nudgeUp)
Cypress.Commands.add('nudgeDown', rightToolsPanel.nudgeDown)
Cypress.Commands.add('nudgeRight', rightToolsPanel.nudgeRight)
Cypress.Commands.add('nudgeLeft', rightToolsPanel.nudgeLeft)
Cypress.Commands.add('rotateRight', rightToolsPanel.rotateRight)
Cypress.Commands.add('rotateLeft', rightToolsPanel.rotateLeft)

//Utils
Cypress.Commands.add('canvasDrawing', utils.canvasDrawing)
Cypress.Commands.add('canvasClick', utils.canvasClick)
Cypress.Commands.add('changeZ', utils.changeZ)
Cypress.Commands.add('downloadDesign', utils.downloadDesign)
Cypress.Commands.add('isPreviewOpened', utils.isPreviewOpened)
Cypress.Commands.add('changeView', utils.changeView)
Cypress.Commands.add('openFile', utils.openFile)
Cypress.Commands.add('openFileAndUseSolution', utils.openFileAndUseSolution)
Cypress.Commands.add('viewCompare', utils.viewCompare)

//MyDesignsTab
Cypress.Commands.add('saveDesign', myDesigns.saveDesign)

//Projection
Cypress.Commands.add('checkProjection', projection.checkProjection)
Cypress.Commands.add('checkProjectionFromAllView', projection.checkProjectionFromAllView)

//Corner
Cypress.Commands.add('cornerMath', corner.math)
Cypress.Commands.add('cornerCancelValue', corner.cancelValue)
Cypress.Commands.add('cornerConfirmValue', corner.confirmValue)
Cypress.Commands.add('cornerNegativeValue', corner.negativeValue)
Cypress.Commands.add('cornerPositiveValue', corner.positiveValue)
Cypress.Commands.add('cornerSymbolValue', corner.symbolValue)
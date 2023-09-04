if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'BIX-100'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'BIX-100'.");
}
this['BIX-100'] = function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var listOfNotNull = Kotlin.kotlin.collections.listOfNotNull_issdgt$;
  var NoWhenBranchMatchedException = Kotlin.kotlin.NoWhenBranchMatchedException;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Comparable = Kotlin.kotlin.Comparable;
  var toList = Kotlin.kotlin.collections.toList_abgq59$;
  var compareBy = Kotlin.kotlin.comparisons.compareBy_bvgy4j$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var AssertionError = Kotlin.kotlin.AssertionError;
  var Pair = Kotlin.kotlin.Pair;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var toString = Kotlin.toString;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var replaceFirst = Kotlin.kotlin.text.replaceFirst_680rmw$;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var throwCCE = Kotlin.throwCCE;
  var getCallableRef = Kotlin.getCallableRef;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var single = Kotlin.kotlin.collections.single_2p1efm$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var Throwable = Error;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var toMap_0 = Kotlin.kotlin.collections.toMap_abgq59$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  Core$T21Basic$Jump$ToOffset.prototype = Object.create(Core$T21Basic$Jump.prototype);
  Core$T21Basic$Jump$ToOffset.prototype.constructor = Core$T21Basic$Jump$ToOffset;
  Core$T21Basic$Jump$ToLabel.prototype = Object.create(Core$T21Basic$Jump.prototype);
  Core$T21Basic$Jump$ToLabel.prototype.constructor = Core$T21Basic$Jump$ToLabel;
  Core$T21Basic.prototype = Object.create(Core.prototype);
  Core$T21Basic.prototype.constructor = Core$T21Basic;
  Core$Damaged.prototype = Object.create(Core.prototype);
  Core$Damaged.prototype.constructor = Core$Damaged;
  Core$T30Stack.prototype = Object.create(Core.prototype);
  Core$T30Stack.prototype.constructor = Core$T30Stack;
  Core$T20.prototype = Object.create(Core.prototype);
  Core$T20.prototype.constructor = Core$T20;
  Core$T31.prototype = Object.create(Core.prototype);
  Core$T31.prototype.constructor = Core$T31;
  Core$Input.prototype = Object.create(Core.prototype);
  Core$Input.prototype.constructor = Core$Input;
  Core$Output.prototype = Object.create(Core.prototype);
  Core$Output.prototype.constructor = Core$Output;
  Core$ImageOutput.prototype = Object.create(Core.prototype);
  Core$ImageOutput.prototype.constructor = Core$ImageOutput;
  Core$PuzzleImage.prototype = Object.create(Core$ImageOutput.prototype);
  Core$PuzzleImage.prototype.constructor = Core$PuzzleImage;
  Core$SandboxImage.prototype = Object.create(Core$ImageOutput.prototype);
  Core$SandboxImage.prototype.constructor = Core$SandboxImage;
  CoreType.prototype = Object.create(Enum.prototype);
  CoreType.prototype.constructor = CoreType;
  Mode.prototype = Object.create(Enum.prototype);
  Mode.prototype.constructor = Mode;
  Instruction$NOP.prototype = Object.create(Instruction.prototype);
  Instruction$NOP.prototype.constructor = Instruction$NOP;
  Instruction$SWP.prototype = Object.create(Instruction.prototype);
  Instruction$SWP.prototype.constructor = Instruction$SWP;
  Instruction$SAV.prototype = Object.create(Instruction.prototype);
  Instruction$SAV.prototype.constructor = Instruction$SAV;
  Instruction$NEG.prototype = Object.create(Instruction.prototype);
  Instruction$NEG.prototype.constructor = Instruction$NEG;
  Instruction$ADD.prototype = Object.create(Instruction.prototype);
  Instruction$ADD.prototype.constructor = Instruction$ADD;
  Instruction$SUB.prototype = Object.create(Instruction.prototype);
  Instruction$SUB.prototype.constructor = Instruction$SUB;
  Instruction$MOV.prototype = Object.create(Instruction.prototype);
  Instruction$MOV.prototype.constructor = Instruction$MOV;
  Instruction$JMP.prototype = Object.create(Instruction.prototype);
  Instruction$JMP.prototype.constructor = Instruction$JMP;
  Instruction$JEZ.prototype = Object.create(Instruction.prototype);
  Instruction$JEZ.prototype.constructor = Instruction$JEZ;
  Instruction$JNZ.prototype = Object.create(Instruction.prototype);
  Instruction$JNZ.prototype.constructor = Instruction$JNZ;
  Instruction$JGZ.prototype = Object.create(Instruction.prototype);
  Instruction$JGZ.prototype.constructor = Instruction$JGZ;
  Instruction$JLZ.prototype = Object.create(Instruction.prototype);
  Instruction$JLZ.prototype.constructor = Instruction$JLZ;
  Instruction$JRO.prototype = Object.create(Instruction.prototype);
  Instruction$JRO.prototype.constructor = Instruction$JRO;
  Opcode.prototype = Object.create(Enum.prototype);
  Opcode.prototype.constructor = Opcode;
  NIL.prototype = Object.create(Constant.prototype);
  NIL.prototype.constructor = NIL;
  Port$ANY.prototype = Object.create(Port.prototype);
  Port$ANY.prototype.constructor = Port$ANY;
  Port$LAST.prototype = Object.create(Port.prototype);
  Port$LAST.prototype.constructor = Port$LAST;
  Direction.prototype = Object.create(Port.prototype);
  Direction.prototype.constructor = Direction;
  Direction$UP.prototype = Object.create(Direction.prototype);
  Direction$UP.prototype.constructor = Direction$UP;
  Direction$LEFT.prototype = Object.create(Direction.prototype);
  Direction$LEFT.prototype.constructor = Direction$LEFT;
  Direction$DOWN.prototype = Object.create(Direction.prototype);
  Direction$DOWN.prototype.constructor = Direction$DOWN;
  Direction$RIGHT.prototype = Object.create(Direction.prototype);
  Direction$RIGHT.prototype.constructor = Direction$RIGHT;
  Parser$Error$InvalidLabel.prototype = Object.create(Parser$Error.prototype);
  Parser$Error$InvalidLabel.prototype.constructor = Parser$Error$InvalidLabel;
  Parser$Error$LabelIsAlreadyDefined.prototype = Object.create(Parser$Error.prototype);
  Parser$Error$LabelIsAlreadyDefined.prototype.constructor = Parser$Error$LabelIsAlreadyDefined;
  Parser$Error$InvalidOpcode.prototype = Object.create(Parser$Error.prototype);
  Parser$Error$InvalidOpcode.prototype.constructor = Parser$Error$InvalidOpcode;
  Parser$Error$MissingOperand.prototype = Object.create(Parser$Error.prototype);
  Parser$Error$MissingOperand.prototype.constructor = Parser$Error$MissingOperand;
  Parser$Error$TooManyOperands.prototype = Object.create(Parser$Error.prototype);
  Parser$Error$TooManyOperands.prototype.constructor = Parser$Error$TooManyOperands;
  Parser$Error$InvalidExpression.prototype = Object.create(Parser$Error.prototype);
  Parser$Error$InvalidExpression.prototype.constructor = Parser$Error$InvalidExpression;
  Parser$Error$InvalidRegister.prototype = Object.create(Parser$Error.prototype);
  Parser$Error$InvalidRegister.prototype.constructor = Parser$Error$InvalidRegister;
  Parser$Error$UndefinedLabel.prototype = Object.create(Parser$Error.prototype);
  Parser$Error$UndefinedLabel.prototype.constructor = Parser$Error$UndefinedLabel;
  CoreGrid.prototype = Object.create(Widget.prototype);
  CoreGrid.prototype.constructor = CoreGrid;
  HorizPipe.prototype = Object.create(Widget.prototype);
  HorizPipe.prototype.constructor = HorizPipe;
  VertiPipe.prototype = Object.create(Widget.prototype);
  VertiPipe.prototype.constructor = VertiPipe;
  ArrowSpanOrDiv.prototype = Object.create(Widget.prototype);
  ArrowSpanOrDiv.prototype.constructor = ArrowSpanOrDiv;
  Core_0.prototype = Object.create(Widget.prototype);
  Core_0.prototype.constructor = Core_0;
  Logger.prototype = Object.create(Widget.prototype);
  Logger.prototype.constructor = Logger;
  Result$Success.prototype = Object.create(Result.prototype);
  Result$Success.prototype.constructor = Result$Success;
  Result$Failure.prototype = Object.create(Result.prototype);
  Result$Failure.prototype.constructor = Result$Failure;
  function Core() {
  }
  function Core$T21Basic() {
    Core.call(this);
    this.acc = new Num(0);
    this.bak = new Num(0);
    this.last = null;
    this.mode = Mode$Idle_getInstance();
    this.idlePercent = 0;
    this.cachedParseResult_0 = null;
    this._text_0 = '';
    this.instructionIndex = 0;
  }
  Core$T21Basic.prototype.isInstructionHighlightDimmed = function () {
    return this.mode !== Mode$Run_getInstance();
  };
  Core$T21Basic.prototype.isOnBreakpoint = function () {
    var tmp$, tmp$_0;
    return ((tmp$_0 = (tmp$ = this.currentLine_0()) != null ? tmp$.hasBreakpoint : null) != null ? tmp$_0 : false) && this.mode === Mode$Run_getInstance();
  };
  Object.defineProperty(Core$T21Basic.prototype, 'text', {
    get: function () {
      return this._text_0;
    },
    set: function (value) {
      this.cachedParseResult_0 = null;
      this._text_0 = value;
    }
  });
  Core$T21Basic.prototype.parseResult_0 = function () {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.cachedParseResult_0) != null)
      tmp$_0 = tmp$;
    else {
      this.cachedParseResult_0 = Parser_getInstance().parse_61zpoe$(this.text);
      tmp$_0 = this.cachedParseResult_0;
    }
    return tmp$_0;
  };
  Core$T21Basic.prototype.lines_0 = function () {
    var tmp$, tmp$_0;
    return (tmp$_0 = Kotlin.isType(tmp$ = this.parseResult_0(), Result$Success) ? tmp$ : null) != null ? tmp$_0.item : null;
  };
  Core$T21Basic.prototype.instructions_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = Kotlin.isType(tmp$ = this.parseResult_0(), Result$Success) ? tmp$ : null) != null ? tmp$_0.item : null) != null ? tmp$_1.instructions : null;
  };
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  Core$T21Basic.prototype.currentInstruction_0 = function () {
    var $receiver = this.instructions_0();
    return getOrNull($receiver != null ? $receiver : emptyList(), this.instructionIndex);
  };
  Core$T21Basic.prototype.currentLine_0 = function () {
    var tmp$;
    var $receiver = (tmp$ = this.lines_0()) != null ? tmp$.lines : null;
    return getOrNull($receiver != null ? $receiver : emptyList(), this.instructionIndex);
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  Core$T21Basic.prototype.canReadFrom_dbt1po$ = function (direction) {
    var tmp$;
    tmp$ = this.instructions_0();
    if (tmp$ == null) {
      return true;
    }
    var destination = ArrayList_init(collectionSizeOrDefault(tmp$, 10));
    var tmp$_0;
    tmp$_0 = tmp$.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item != null ? item.source : null);
    }
    var reads = filterNotNull(destination);
    return reads.contains_11rb$(direction) || reads.contains_11rb$(Port$ANY_getInstance()) || reads.contains_11rb$(Port$LAST_getInstance());
  };
  Core$T21Basic.prototype.canWriteTo_dbt1po$ = function (direction) {
    var tmp$;
    tmp$ = this.instructions_0();
    if (tmp$ == null) {
      return true;
    }
    var destination = ArrayList_init();
    var tmp$_0;
    tmp$_0 = tmp$.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (Kotlin.isType(element, Instruction$MOV))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_1;
    tmp$_1 = destination.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination_0.add_11rb$(item.destination);
    }
    var writes = destination_0;
    return writes.contains_11rb$(direction) || writes.contains_11rb$(Port$ANY_getInstance()) || writes.contains_11rb$(Port$LAST_getInstance());
  };
  Core$T21Basic.prototype.reset = function () {
    this.acc = new Num(0);
    this.bak = new Num(0);
    this.last = null;
    this.mode = Mode$Idle_getInstance();
    this.idlePercent = 0;
    this.instructionIndex = 0;
  };
  Core$T21Basic.prototype.instructionIndexFromLabel_0 = function (label) {
    var $receiver = ensureNotNull(this.lines_0()).lines;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.instruction != null)
        destination.add_11rb$(element);
    }
    var tmp$result;
    tmp$break: do {
      var tmp$_0;
      var index = 0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        if (equals(item.label, label)) {
          tmp$result = index;
          break tmp$break;
        }
        index = index + 1 | 0;
      }
      tmp$result = -1;
    }
     while (false);
    return tmp$result;
  };
  Core$T21Basic.prototype.execute_6xuryi$ = function (stepExecution) {
    var instructions = this.instructions_0();
    var instruction = this.currentInstruction_0();
    if (instructions == null || instruction == null) {
      this.mode = Mode$Idle_getInstance();
      return;
    }
    var result = this.executeInstruction_0(stepExecution, instruction);
    this.applyResult_0(result, instructions);
  };
  Core$T21Basic.prototype.applyResult_0 = function (result, instructions) {
    var tmp$, tmp$_0;
    this.mode = result.mode;
    tmp$ = result.jump;
    if (Kotlin.isType(tmp$, Core$T21Basic$Jump$ToLabel))
      tmp$_0 = this.instructionIndexFromLabel_0(result.jump.label);
    else if (Kotlin.isType(tmp$, Core$T21Basic$Jump$ToOffset)) {
      tmp$_0 = (this.instructionIndex + result.jump.offset | 0) % instructions.size;
    }
     else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    this.instructionIndex = tmp$_0;
  };
  Core$T21Basic.prototype.executeMovEnd_d0nusr$ = function (direction) {
    var instructions = this.instructions_0();
    var instruction = this.currentInstruction_0();
    if (instructions == null || instruction == null) {
      this.mode = Mode$Idle_getInstance();
      return;
    }
    if (!Kotlin.isType(instruction, Instruction$MOV) || this.mode !== Mode$ImplementationError_getInstance()) {
      return;
    }
    var result = this.executeMovEnd2_0(instruction, direction);
    this.applyResult_0(result, instructions);
  };
  Core$T21Basic.prototype.executeMovEnd2_0 = function (instruction, directionWrittenTo) {
    if (directionWrittenTo == null) {
      return Core$T21Basic$InstructionResult$Companion_getInstance().writing;
    }
    if (equals(instruction.destination, Port$ANY_getInstance())) {
      this.last = directionWrittenTo;
    }
    return Core$T21Basic$InstructionResult$Companion_getInstance().advance;
  };
  function Core$T21Basic$executeInstruction$lambda(this$T21Basic) {
    return function (it) {
      this$T21Basic.acc = this$T21Basic.acc.plus_fe0pm8$(it);
      return Core$T21Basic$InstructionResult$Companion_getInstance().advance;
    };
  }
  function Core$T21Basic$executeInstruction$lambda_0(this$T21Basic) {
    return function (it) {
      this$T21Basic.acc = this$T21Basic.acc.minus_fe0pm8$(it);
      return Core$T21Basic$InstructionResult$Companion_getInstance().advance;
    };
  }
  function Core$T21Basic$executeInstruction$lambda_1(it) {
    return Core$T21Basic$InstructionResult$Companion_getInstance().relativeJump_za3lpa$(it.number);
  }
  Core$T21Basic.prototype.executeInstruction_0 = function (stepExecution, instruction) {
    var tmp$;
    if (Kotlin.isType(instruction, Instruction$NOP))
      tmp$ = Core$T21Basic$InstructionResult$Companion_getInstance().advance;
    else if (Kotlin.isType(instruction, Instruction$SWP)) {
      var $receiver = Core$T21Basic$InstructionResult$Companion_getInstance().advance;
      var temp = this.acc;
      this.acc = this.bak;
      this.bak = temp;
      tmp$ = $receiver;
    }
     else if (Kotlin.isType(instruction, Instruction$SAV)) {
      var $receiver_0 = Core$T21Basic$InstructionResult$Companion_getInstance().advance;
      this.bak = this.acc;
      tmp$ = $receiver_0;
    }
     else if (Kotlin.isType(instruction, Instruction$NEG)) {
      var $receiver_1 = Core$T21Basic$InstructionResult$Companion_getInstance().advance;
      this.acc = this.acc.unaryMinus();
      tmp$ = $receiver_1;
    }
     else if (Kotlin.isType(instruction, Instruction$ADD))
      tmp$ = stepExecution.readOrWait_r669qp$(instruction.source, this, Core$T21Basic$executeInstruction$lambda(this));
    else if (Kotlin.isType(instruction, Instruction$SUB))
      tmp$ = stepExecution.readOrWait_r669qp$(instruction.source, this, Core$T21Basic$executeInstruction$lambda_0(this));
    else if (Kotlin.isType(instruction, Instruction$MOV))
      tmp$ = this.mov_0(stepExecution, instruction.source, instruction.destination);
    else if (Kotlin.isType(instruction, Instruction$JMP))
      tmp$ = Core$T21Basic$InstructionResult$Companion_getInstance().jump_lsn8y1$(instruction.label);
    else if (Kotlin.isType(instruction, Instruction$JEZ))
      tmp$ = this.acc.number === 0 ? Core$T21Basic$InstructionResult$Companion_getInstance().jump_lsn8y1$(instruction.label) : Core$T21Basic$InstructionResult$Companion_getInstance().advance;
    else if (Kotlin.isType(instruction, Instruction$JNZ))
      tmp$ = this.acc.number !== 0 ? Core$T21Basic$InstructionResult$Companion_getInstance().jump_lsn8y1$(instruction.label) : Core$T21Basic$InstructionResult$Companion_getInstance().advance;
    else if (Kotlin.isType(instruction, Instruction$JGZ))
      tmp$ = this.acc.number > 0 ? Core$T21Basic$InstructionResult$Companion_getInstance().jump_lsn8y1$(instruction.label) : Core$T21Basic$InstructionResult$Companion_getInstance().advance;
    else if (Kotlin.isType(instruction, Instruction$JLZ))
      tmp$ = this.acc.number < 0 ? Core$T21Basic$InstructionResult$Companion_getInstance().jump_lsn8y1$(instruction.label) : Core$T21Basic$InstructionResult$Companion_getInstance().advance;
    else if (Kotlin.isType(instruction, Instruction$JRO))
      tmp$ = stepExecution.readOrWait_r669qp$(instruction.source, this, Core$T21Basic$executeInstruction$lambda_1);
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  function Core$T21Basic$mov$lambda(closure$destination, this$T21Basic, closure$stepExecution) {
    return function (num) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$ = closure$destination;
      if (Kotlin.isType(tmp$, NIL))
        return Core$T21Basic$InstructionResult$Companion_getInstance().advance;
      else if (Kotlin.isType(tmp$, ACC)) {
        var $receiver = Core$T21Basic$InstructionResult$Companion_getInstance().advance;
        this$T21Basic.acc = num;
        return $receiver;
      }
       else if (Kotlin.isType(tmp$, Port)) {
        tmp$_0 = closure$destination;
        if (Kotlin.isType(tmp$_0, Direction))
          tmp$_1 = listOf(closure$destination);
        else if (Kotlin.isType(tmp$_0, Port$LAST))
          tmp$_1 = listOfNotNull(this$T21Basic.last);
        else if (Kotlin.isType(tmp$_0, Port$ANY))
          tmp$_1 = Direction$Companion_getInstance().all;
        else
          tmp$_1 = Kotlin.noWhenBranchMatched();
        var directions = tmp$_1;
        if (directions.isEmpty()) {
          return Core$T21Basic$InstructionResult$Companion_getInstance().advance;
        }
         else {
          tmp$_2 = directions.iterator();
          while (tmp$_2.hasNext()) {
            var direction = tmp$_2.next();
            closure$stepExecution.delayedWriteToPipe_2kz735$(this$T21Basic, direction, num);
          }
          return Core$T21Basic$InstructionResult$Companion_getInstance().writing;
        }
      }
       else
        throw new NoWhenBranchMatchedException(closure$destination.toString());
    };
  }
  Core$T21Basic.prototype.mov_0 = function (stepExecution, source, destination) {
    if (this.mode !== Mode$Write_getInstance()) {
      return stepExecution.readOrWait_r669qp$(source, this, Core$T21Basic$mov$lambda(destination, this, stepExecution));
    }
     else {
      return Core$T21Basic$InstructionResult$Companion_getInstance().unfinishedInPhaseOne;
    }
  };
  function Core$T21Basic$Jump() {
  }
  function Core$T21Basic$Jump$ToOffset(offset) {
    Core$T21Basic$Jump.call(this);
    this.offset = offset;
  }
  Core$T21Basic$Jump$ToOffset.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToOffset',
    interfaces: [Core$T21Basic$Jump]
  };
  Core$T21Basic$Jump$ToOffset.prototype.component1 = function () {
    return this.offset;
  };
  Core$T21Basic$Jump$ToOffset.prototype.copy_za3lpa$ = function (offset) {
    return new Core$T21Basic$Jump$ToOffset(offset === void 0 ? this.offset : offset);
  };
  Core$T21Basic$Jump$ToOffset.prototype.toString = function () {
    return 'ToOffset(offset=' + Kotlin.toString(this.offset) + ')';
  };
  Core$T21Basic$Jump$ToOffset.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    return result;
  };
  Core$T21Basic$Jump$ToOffset.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.offset, other.offset))));
  };
  function Core$T21Basic$Jump$ToLabel(label) {
    Core$T21Basic$Jump.call(this);
    this.label = label;
  }
  Core$T21Basic$Jump$ToLabel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ToLabel',
    interfaces: [Core$T21Basic$Jump]
  };
  Core$T21Basic$Jump$ToLabel.prototype.component1 = function () {
    return this.label;
  };
  Core$T21Basic$Jump$ToLabel.prototype.copy_lsn8y1$ = function (label) {
    return new Core$T21Basic$Jump$ToLabel(label === void 0 ? this.label : label);
  };
  Core$T21Basic$Jump$ToLabel.prototype.toString = function () {
    return 'ToLabel(label=' + Kotlin.toString(this.label) + ')';
  };
  Core$T21Basic$Jump$ToLabel.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    return result;
  };
  Core$T21Basic$Jump$ToLabel.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.label, other.label))));
  };
  Core$T21Basic$Jump.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Jump',
    interfaces: []
  };
  function Core$T21Basic$InstructionResult(mode, jump) {
    Core$T21Basic$InstructionResult$Companion_getInstance();
    this.mode = mode;
    this.jump = jump;
  }
  function Core$T21Basic$InstructionResult$Companion() {
    Core$T21Basic$InstructionResult$Companion_instance = this;
    this.advance = this.relativeJump_za3lpa$(1);
    this.writing = new Core$T21Basic$InstructionResult(Mode$Write_getInstance(), new Core$T21Basic$Jump$ToOffset(0));
    this.reading = new Core$T21Basic$InstructionResult(Mode$Read_getInstance(), new Core$T21Basic$Jump$ToOffset(0));
    this.unfinishedInPhaseOne = new Core$T21Basic$InstructionResult(Mode$ImplementationError_getInstance(), new Core$T21Basic$Jump$ToOffset(0));
  }
  Core$T21Basic$InstructionResult$Companion.prototype.relativeJump_za3lpa$ = function (offset) {
    return new Core$T21Basic$InstructionResult(Mode$Run_getInstance(), new Core$T21Basic$Jump$ToOffset(offset));
  };
  Core$T21Basic$InstructionResult$Companion.prototype.jump_lsn8y1$ = function (label) {
    return new Core$T21Basic$InstructionResult(Mode$Run_getInstance(), new Core$T21Basic$Jump$ToLabel(label));
  };
  Core$T21Basic$InstructionResult$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Core$T21Basic$InstructionResult$Companion_instance = null;
  function Core$T21Basic$InstructionResult$Companion_getInstance() {
    if (Core$T21Basic$InstructionResult$Companion_instance === null) {
      new Core$T21Basic$InstructionResult$Companion();
    }
    return Core$T21Basic$InstructionResult$Companion_instance;
  }
  Core$T21Basic$InstructionResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InstructionResult',
    interfaces: []
  };
  Core$T21Basic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'T21Basic',
    interfaces: [Core]
  };
  function Core$Damaged() {
    Core$Damaged_instance = this;
    Core.call(this);
  }
  Core$Damaged.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Damaged',
    interfaces: [Core]
  };
  var Core$Damaged_instance = null;
  function Core$Damaged_getInstance() {
    if (Core$Damaged_instance === null) {
      new Core$Damaged();
    }
    return Core$Damaged_instance;
  }
  function Core$T30Stack() {
    Core.call(this);
  }
  Core$T30Stack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'T30Stack',
    interfaces: [Core]
  };
  function Core$T20() {
    Core.call(this);
  }
  Core$T20.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'T20',
    interfaces: [Core]
  };
  function Core$T31() {
    Core.call(this);
  }
  Core$T31.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'T31',
    interfaces: [Core]
  };
  function Core$Input(numbers) {
    Core.call(this);
    this.numbers = numbers;
  }
  Core$Input.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Input',
    interfaces: [Core]
  };
  function Core$Output(expectedNumbers) {
    Core.call(this);
    this.expectedNumbers = expectedNumbers;
  }
  Core$Output.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Output',
    interfaces: [Core]
  };
  function Core$PuzzleImage() {
    Core$ImageOutput.call(this, 18, 30);
  }
  Core$PuzzleImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PuzzleImage',
    interfaces: [Core$ImageOutput]
  };
  function Core$SandboxImage() {
    Core$ImageOutput.call(this, 22, 36);
  }
  Core$SandboxImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SandboxImage',
    interfaces: [Core$ImageOutput]
  };
  function Core$ImageOutput(rowCount, colCount) {
    Core.call(this);
    this.rowCount = rowCount;
    this.colCount = colCount;
  }
  Core$ImageOutput.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageOutput',
    interfaces: [Core]
  };
  Core.prototype.execute_6xuryi$ = function (stepExecution) {
    var tmp$;
    Logger$Companion_getInstance().log_61zpoe$('TODO: implement execute() for ' + ((tmp$ = Kotlin.getKClassFromExpression(this).simpleName) != null ? tmp$ : '???'));
  };
  Core.prototype.reset = function () {
    var tmp$;
    Logger$Companion_getInstance().log_61zpoe$('TODO: implement reset() for ' + ((tmp$ = Kotlin.getKClassFromExpression(this).simpleName) != null ? tmp$ : '???'));
  };
  Core.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Core',
    interfaces: []
  };
  function CoreType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function CoreType_initFields() {
    CoreType_initFields = function () {
    };
    CoreType$T21Basic_instance = new CoreType('T21Basic', 0);
    CoreType$T30Stack_instance = new CoreType('T30Stack', 1);
    CoreType$T20_instance = new CoreType('T20', 2);
    CoreType$T31_instance = new CoreType('T31', 3);
    CoreType$Input_instance = new CoreType('Input', 4);
    CoreType$Output_instance = new CoreType('Output', 5);
    CoreType$PuzzleImage_instance = new CoreType('PuzzleImage', 6);
    CoreType$SandboxImage_instance = new CoreType('SandboxImage', 7);
  }
  var CoreType$T21Basic_instance;
  function CoreType$T21Basic_getInstance() {
    CoreType_initFields();
    return CoreType$T21Basic_instance;
  }
  var CoreType$T30Stack_instance;
  function CoreType$T30Stack_getInstance() {
    CoreType_initFields();
    return CoreType$T30Stack_instance;
  }
  var CoreType$T20_instance;
  function CoreType$T20_getInstance() {
    CoreType_initFields();
    return CoreType$T20_instance;
  }
  var CoreType$T31_instance;
  function CoreType$T31_getInstance() {
    CoreType_initFields();
    return CoreType$T31_instance;
  }
  var CoreType$Input_instance;
  function CoreType$Input_getInstance() {
    CoreType_initFields();
    return CoreType$Input_instance;
  }
  var CoreType$Output_instance;
  function CoreType$Output_getInstance() {
    CoreType_initFields();
    return CoreType$Output_instance;
  }
  var CoreType$PuzzleImage_instance;
  function CoreType$PuzzleImage_getInstance() {
    CoreType_initFields();
    return CoreType$PuzzleImage_instance;
  }
  var CoreType$SandboxImage_instance;
  function CoreType$SandboxImage_getInstance() {
    CoreType_initFields();
    return CoreType$SandboxImage_instance;
  }
  CoreType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoreType',
    interfaces: [Enum]
  };
  function CoreType$values() {
    return [CoreType$T21Basic_getInstance(), CoreType$T30Stack_getInstance(), CoreType$T20_getInstance(), CoreType$T31_getInstance(), CoreType$Input_getInstance(), CoreType$Output_getInstance(), CoreType$PuzzleImage_getInstance(), CoreType$SandboxImage_getInstance()];
  }
  CoreType.values = CoreType$values;
  function CoreType$valueOf(name) {
    switch (name) {
      case 'T21Basic':
        return CoreType$T21Basic_getInstance();
      case 'T30Stack':
        return CoreType$T30Stack_getInstance();
      case 'T20':
        return CoreType$T20_getInstance();
      case 'T31':
        return CoreType$T31_getInstance();
      case 'Input':
        return CoreType$Input_getInstance();
      case 'Output':
        return CoreType$Output_getInstance();
      case 'PuzzleImage':
        return CoreType$PuzzleImage_getInstance();
      case 'SandboxImage':
        return CoreType$SandboxImage_getInstance();
      default:throwISE('No enum constant lang.runtime.CoreType.' + name);
    }
  }
  CoreType.valueOf_61zpoe$ = CoreType$valueOf;
  function Mode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Mode_initFields() {
    Mode_initFields = function () {
    };
    Mode$Idle_instance = new Mode('Idle', 0);
    Mode$Run_instance = new Mode('Run', 1);
    Mode$Read_instance = new Mode('Read', 2);
    Mode$Write_instance = new Mode('Write', 3);
    Mode$ImplementationError_instance = new Mode('ImplementationError', 4);
  }
  var Mode$Idle_instance;
  function Mode$Idle_getInstance() {
    Mode_initFields();
    return Mode$Idle_instance;
  }
  var Mode$Run_instance;
  function Mode$Run_getInstance() {
    Mode_initFields();
    return Mode$Run_instance;
  }
  var Mode$Read_instance;
  function Mode$Read_getInstance() {
    Mode_initFields();
    return Mode$Read_instance;
  }
  var Mode$Write_instance;
  function Mode$Write_getInstance() {
    Mode_initFields();
    return Mode$Write_instance;
  }
  var Mode$ImplementationError_instance;
  function Mode$ImplementationError_getInstance() {
    Mode_initFields();
    return Mode$ImplementationError_instance;
  }
  Mode.prototype.toString = function () {
    if (equals(this, Mode$Idle_getInstance()))
      return 'IDLE';
    else if (equals(this, Mode$Run_getInstance()))
      return 'RUN';
    else if (equals(this, Mode$Read_getInstance()))
      return 'READ';
    else if (equals(this, Mode$Write_getInstance()))
      return 'WRTE';
    else if (equals(this, Mode$ImplementationError_getInstance()))
      return 'EROR';
    else
      return Kotlin.noWhenBranchMatched();
  };
  Mode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mode',
    interfaces: [Enum]
  };
  function Mode$values() {
    return [Mode$Idle_getInstance(), Mode$Run_getInstance(), Mode$Read_getInstance(), Mode$Write_getInstance(), Mode$ImplementationError_getInstance()];
  }
  Mode.values = Mode$values;
  function Mode$valueOf(name) {
    switch (name) {
      case 'Idle':
        return Mode$Idle_getInstance();
      case 'Run':
        return Mode$Run_getInstance();
      case 'Read':
        return Mode$Read_getInstance();
      case 'Write':
        return Mode$Write_getInstance();
      case 'ImplementationError':
        return Mode$ImplementationError_getInstance();
      default:throwISE('No enum constant lang.runtime.Mode.' + name);
    }
  }
  Mode.valueOf_61zpoe$ = Mode$valueOf;
  function Num(num) {
    this.num_0 = num;
    var tmp$;
    if (this.num_0 < -999)
      tmp$ = -999;
    else if (this.num_0 > 999)
      tmp$ = 999;
    else
      tmp$ = this.num_0;
    this.number = tmp$;
  }
  Num.prototype.unaryMinus = function () {
    return new Num(-this.num_0);
  };
  Num.prototype.plus_fe0pm8$ = function (arg) {
    return new Num(this.number + arg.number | 0);
  };
  Num.prototype.minus_fe0pm8$ = function (arg) {
    return new Num(this.number - arg.number | 0);
  };
  Num.prototype.toString = function () {
    return this.number.toString();
  };
  Num.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Num',
    interfaces: []
  };
  Num.prototype.component1_0 = function () {
    return this.num_0;
  };
  Num.prototype.copy_za3lpa$ = function (num) {
    return new Num(num === void 0 ? this.num_0 : num);
  };
  Num.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.num_0) | 0;
    return result;
  };
  Num.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.num_0, other.num_0))));
  };
  function CorePosition(x, y) {
    this.x = x;
    this.y = y;
  }
  CorePosition.prototype.up = function () {
    return new CorePosition(this.x, this.y - 1 | 0);
  };
  CorePosition.prototype.down = function () {
    return new CorePosition(this.x, this.y + 1 | 0);
  };
  CorePosition.prototype.left = function () {
    return new CorePosition(this.x - 1 | 0, this.y);
  };
  CorePosition.prototype.right = function () {
    return new CorePosition(this.x + 1 | 0, this.y);
  };
  CorePosition.prototype.neighbor_dbt1po$ = function (direction) {
    if (equals(direction, Direction$UP_getInstance()))
      return this.up();
    else if (equals(direction, Direction$DOWN_getInstance()))
      return this.down();
    else if (equals(direction, Direction$LEFT_getInstance()))
      return this.left();
    else if (equals(direction, Direction$RIGHT_getInstance()))
      return this.right();
    else
      return Kotlin.noWhenBranchMatched();
  };
  CorePosition.prototype.toString = function () {
    return this.x.toString() + ',' + this.y;
  };
  CorePosition.prototype.compareTo_11rb$ = function (other) {
    var it = Kotlin.primitiveCompareTo(this.x, other.x);
    return it !== 0 ? it : Kotlin.primitiveCompareTo(this.y, other.y);
  };
  CorePosition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CorePosition',
    interfaces: [Comparable]
  };
  CorePosition.prototype.component1 = function () {
    return this.x;
  };
  CorePosition.prototype.component2 = function () {
    return this.y;
  };
  CorePosition.prototype.copy_vux9f0$ = function (x, y) {
    return new CorePosition(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  CorePosition.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  CorePosition.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function PipeKey(from, to) {
    PipeKey$Companion_getInstance();
    this.from = from;
    this.to = to;
  }
  function PipeKey$Companion() {
    PipeKey$Companion_instance = this;
  }
  PipeKey$Companion.prototype.readingFrom_rdx6u$ = function (corePosition, direction) {
    return new PipeKey(corePosition.neighbor_dbt1po$(direction), corePosition);
  };
  PipeKey$Companion.prototype.writingTo_rdx6u$ = function (corePosition, direction) {
    return new PipeKey(corePosition, corePosition.neighbor_dbt1po$(direction));
  };
  PipeKey$Companion.prototype.fromTo_pijq1c$ = function (from, to) {
    return new PipeKey(from, to);
  };
  PipeKey$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PipeKey$Companion_instance = null;
  function PipeKey$Companion_getInstance() {
    if (PipeKey$Companion_instance === null) {
      new PipeKey$Companion();
    }
    return PipeKey$Companion_instance;
  }
  PipeKey.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PipeKey',
    interfaces: []
  };
  PipeKey.prototype.component1 = function () {
    return this.from;
  };
  PipeKey.prototype.component2 = function () {
    return this.to;
  };
  PipeKey.prototype.copy_pijq1c$ = function (from, to) {
    return new PipeKey(from === void 0 ? this.from : from, to === void 0 ? this.to : to);
  };
  PipeKey.prototype.toString = function () {
    return 'PipeKey(from=' + Kotlin.toString(this.from) + (', to=' + Kotlin.toString(this.to)) + ')';
  };
  PipeKey.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.to) | 0;
    return result;
  };
  PipeKey.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to)))));
  };
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  function RuntimeState(cores) {
    this.cores = cores;
    this.currentCycle_69gq4u$_0 = null;
    this.pipes = LinkedHashMap_init();
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  RuntimeState.prototype.isOnBreakpoint = function () {
    var $receiver = this.cores.values;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, Core$T21Basic))
        destination.add_11rb$(element);
    }
    var tmp$result;
    tmp$break: do {
      var tmp$_0;
      if (Kotlin.isType(destination, Collection) && destination.isEmpty()) {
        tmp$result = false;
        break tmp$break;
      }
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        if (element_0.isOnBreakpoint()) {
          tmp$result = true;
          break tmp$break;
        }
      }
      tmp$result = false;
    }
     while (false);
    return tmp$result;
  };
  RuntimeState.prototype.isExecuting = function () {
    return this.currentCycle != null;
  };
  Object.defineProperty(RuntimeState.prototype, 'currentCycle', {
    get: function () {
      return this.currentCycle_69gq4u$_0;
    },
    set: function (currentCycle) {
      this.currentCycle_69gq4u$_0 = currentCycle;
    }
  });
  RuntimeState.prototype.stop = function () {
    var tmp$;
    this.currentCycle = null;
    tmp$ = this.cores.values.iterator();
    while (tmp$.hasNext()) {
      var core = tmp$.next();
      core.reset();
    }
    this.pipes.clear();
  };
  RuntimeState.prototype.step = function () {
    var tmp$;
    this.currentCycle = ((tmp$ = this.currentCycle) != null ? tmp$ : -1) + 1 | 0;
    if (this.currentCycle === 0)
      return;
    (new StepExecution(this)).execute();
  };
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException;
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  var Any = Object;
  RuntimeState.prototype.coreKey_k4z6l1$ = function (core) {
    var tmp$, tmp$_0;
    var single = null;
    var found = false;
    tmp$ = toList(this.cores).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (equals(element.second, core)) {
        if (found)
          throw new IllegalArgumentException_init('Collection contains more than one matching element.');
        single = element;
        found = true;
      }
    }
    if (!found)
      throw new NoSuchElementException_init('Collection contains no element matching the predicate.');
    return ((tmp$_0 = single) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE()).first;
  };
  RuntimeState.prototype.isArrowVisible_rdx6u$ = function (corePosition, direction) {
    var sourceCore = this.cores.get_11rb$(corePosition);
    var destinationCore = this.cores.get_11rb$(corePosition.neighbor_dbt1po$(direction));
    var sourceCanSend = !Kotlin.isType(sourceCore, Core$T21Basic) || sourceCore.canWriteTo_dbt1po$(direction);
    var destinationCanRead = !Kotlin.isType(destinationCore, Core$T21Basic) || destinationCore.canReadFrom_dbt1po$(direction.opposite());
    return sourceCore != null && destinationCore != null && sourceCanSend && destinationCanRead;
  };
  RuntimeState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RuntimeState',
    interfaces: []
  };
  function StepExecution(runtimeState) {
    this.runtimeState_0 = runtimeState;
    this.directionDataWentTo_0 = LinkedHashMap_init();
    this.delayedWrites_0 = LinkedHashMap_init();
  }
  StepExecution.prototype.delayedWriteToPipe_2kz735$ = function (writerCore, direction, num) {
    var corePosition = this.runtimeState_0.coreKey_k4z6l1$(writerCore);
    var pipeKey = PipeKey$Companion_getInstance().writingTo_rdx6u$(corePosition, direction);
    this.delayedWrites_0.put_xwzc9p$(pipeKey, num);
  };
  function StepExecution$execute$lambda(it) {
    return it.key.y;
  }
  function StepExecution$execute$lambda_0(it) {
    return it.key.x;
  }
  StepExecution.prototype.execute = function () {
    var tmp$, tmp$_0;
    tmp$ = sortedWith(this.runtimeState_0.cores.entries, compareBy([StepExecution$execute$lambda, StepExecution$execute$lambda_0])).iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var corePosition = tmp$_1.key;
      var core = tmp$_1.value;
      var ok = false;
      try {
        core.execute_6xuryi$(this);
        ok = true;
      }
      finally {
        if (!ok)
          Logger$Companion_getInstance().log_61zpoe$('execution of core at ' + corePosition + ' failed; other cores not executed');
      }
    }
    var $receiver = this.runtimeState_0.cores.values;
    var destination = ArrayList_init();
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      if (Kotlin.isType(element, Core$T21Basic))
        destination.add_11rb$(element);
    }
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var core_0 = tmp$_0.next();
      core_0.executeMovEnd_d0nusr$(this.directionDataWentTo_0.get_11rb$(core_0));
    }
    this.runtimeState_0.pipes.putAll_a2k3zr$(this.delayedWrites_0);
    var $receiver_0 = this.runtimeState_0.cores.values;
    var destination_0 = ArrayList_init();
    var tmp$_3;
    tmp$_3 = $receiver_0.iterator();
    while (tmp$_3.hasNext()) {
      var element_0 = tmp$_3.next();
      if (Kotlin.isType(element_0, Core$T21Basic))
        destination_0.add_11rb$(element_0);
    }
    var tmp$result;
    tmp$break: do {
      var tmp$_4;
      if (Kotlin.isType(destination_0, Collection) && destination_0.isEmpty()) {
        tmp$result = false;
        break tmp$break;
      }
      tmp$_4 = destination_0.iterator();
      while (tmp$_4.hasNext()) {
        var element_1 = tmp$_4.next();
        if (element_1.mode === Mode$ImplementationError_getInstance()) {
          tmp$result = true;
          break tmp$break;
        }
      }
      tmp$result = false;
    }
     while (false);
    if (tmp$result) {
      throw new AssertionError('Mode.ImplementationError');
    }
  };
  StepExecution.prototype.readOrWait_r669qp$ = function (source, readerCore, action) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(source, ACC))
      tmp$_0 = action(readerCore.acc);
    else if (Kotlin.isType(source, Constant))
      tmp$_0 = action(new Num(source.number));
    else if (Kotlin.isType(source, Port)) {
      if (Kotlin.isType(source, Direction))
        tmp$ = listOf(source);
      else if (Kotlin.isType(source, Port$LAST))
        tmp$ = listOfNotNull(readerCore.last);
      else if (Kotlin.isType(source, Port$ANY))
        tmp$ = Direction$Companion_getInstance().all;
      else
        tmp$ = Kotlin.noWhenBranchMatched();
      var directions = tmp$;
      if (directions.isEmpty()) {
        tmp$_0 = action(new Num(0));
      }
       else {
        var data = this.tryReadFromPipes_0(readerCore, directions);
        if (data == null)
          tmp$_0 = Core$T21Basic$InstructionResult$Companion_getInstance().reading;
        else {
          var direction = data.component1()
          , availableData = data.component2();
          if (equals(source, Port$ANY_getInstance())) {
            readerCore.last = direction;
          }
          tmp$_0 = action(availableData);
        }
      }
    }
     else
      throw new NoWhenBranchMatchedException(source.toString());
    return tmp$_0;
  };
  StepExecution.prototype.tryReadFromPipes_0 = function (readerCore, directions) {
    var tmp$, tmp$_0, tmp$_1;
    var corePosition = this.runtimeState_0.coreKey_k4z6l1$(readerCore);
    tmp$ = directions.iterator();
    while (tmp$.hasNext()) {
      var direction = tmp$.next();
      var availableData = this.runtimeState_0.pipes.get_11rb$(PipeKey$Companion_getInstance().readingFrom_rdx6u$(corePosition, direction));
      if (availableData != null) {
        var senderCore = corePosition.neighbor_dbt1po$(direction);
        var $receiver = Direction$Companion_getInstance().all;
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$_2;
        tmp$_2 = $receiver.iterator();
        while (tmp$_2.hasNext()) {
          var item = tmp$_2.next();
          destination.add_11rb$(PipeKey$Companion_getInstance().writingTo_rdx6u$(senderCore, item));
        }
        tmp$_0 = destination.iterator();
        while (tmp$_0.hasNext()) {
          var pipeKey = tmp$_0.next();
          this.runtimeState_0.pipes.put_xwzc9p$(pipeKey, null);
        }
        if ((tmp$_1 = this.runtimeState_0.cores.get_11rb$(corePosition.neighbor_dbt1po$(direction))) != null) {
          this.directionDataWentTo_0.put_xwzc9p$(tmp$_1, direction.opposite());
        }
        return new Pair(direction, availableData);
      }
    }
    return null;
  };
  StepExecution.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StepExecution',
    interfaces: []
  };
  function Instruction() {
    Instruction$Companion_getInstance();
    this.source_afgdis$_0 = null;
    var tmp$;
    if (Kotlin.isType(this, Instruction$NOP))
      tmp$ = 'NOP';
    else if (Kotlin.isType(this, Instruction$SWP))
      tmp$ = 'SWP';
    else if (Kotlin.isType(this, Instruction$SAV))
      tmp$ = 'SAV';
    else if (Kotlin.isType(this, Instruction$NEG))
      tmp$ = 'NEG';
    else if (Kotlin.isType(this, Instruction$ADD))
      tmp$ = 'ADD ' + this.source;
    else if (Kotlin.isType(this, Instruction$SUB))
      tmp$ = 'SUB ' + this.source;
    else if (Kotlin.isType(this, Instruction$MOV))
      tmp$ = 'MOV ' + this.source + ' ' + this.destination;
    else if (Kotlin.isType(this, Instruction$JMP))
      tmp$ = 'JMP ' + this.label;
    else if (Kotlin.isType(this, Instruction$JEZ))
      tmp$ = 'JEZ ' + this.label;
    else if (Kotlin.isType(this, Instruction$JNZ))
      tmp$ = 'JNZ ' + this.label;
    else if (Kotlin.isType(this, Instruction$JGZ))
      tmp$ = 'JGZ ' + this.label;
    else if (Kotlin.isType(this, Instruction$JLZ))
      tmp$ = 'JLZ ' + this.label;
    else if (Kotlin.isType(this, Instruction$JRO))
      tmp$ = 'JRO ' + this.source;
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    this.name = tmp$;
  }
  function Instruction$NOP() {
    Instruction$NOP_instance = this;
    Instruction.call(this);
  }
  Instruction$NOP.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NOP',
    interfaces: [Instruction]
  };
  var Instruction$NOP_instance = null;
  function Instruction$NOP_getInstance() {
    if (Instruction$NOP_instance === null) {
      new Instruction$NOP();
    }
    return Instruction$NOP_instance;
  }
  function Instruction$SWP() {
    Instruction$SWP_instance = this;
    Instruction.call(this);
  }
  Instruction$SWP.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SWP',
    interfaces: [Instruction]
  };
  var Instruction$SWP_instance = null;
  function Instruction$SWP_getInstance() {
    if (Instruction$SWP_instance === null) {
      new Instruction$SWP();
    }
    return Instruction$SWP_instance;
  }
  function Instruction$SAV() {
    Instruction$SAV_instance = this;
    Instruction.call(this);
  }
  Instruction$SAV.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SAV',
    interfaces: [Instruction]
  };
  var Instruction$SAV_instance = null;
  function Instruction$SAV_getInstance() {
    if (Instruction$SAV_instance === null) {
      new Instruction$SAV();
    }
    return Instruction$SAV_instance;
  }
  function Instruction$NEG() {
    Instruction$NEG_instance = this;
    Instruction.call(this);
  }
  Instruction$NEG.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NEG',
    interfaces: [Instruction]
  };
  var Instruction$NEG_instance = null;
  function Instruction$NEG_getInstance() {
    if (Instruction$NEG_instance === null) {
      new Instruction$NEG();
    }
    return Instruction$NEG_instance;
  }
  function Instruction$ADD(source) {
    Instruction.call(this);
    this.source_iyykqh$_0 = source;
  }
  Object.defineProperty(Instruction$ADD.prototype, 'source', {
    get: function () {
      return this.source_iyykqh$_0;
    }
  });
  Instruction$ADD.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ADD',
    interfaces: [Instruction]
  };
  Instruction$ADD.prototype.component1 = function () {
    return this.source;
  };
  Instruction$ADD.prototype.copy_v3qz4q$ = function (source) {
    return new Instruction$ADD(source === void 0 ? this.source : source);
  };
  Instruction$ADD.prototype.toString = function () {
    return 'ADD(source=' + Kotlin.toString(this.source) + ')';
  };
  Instruction$ADD.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.source) | 0;
    return result;
  };
  Instruction$ADD.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.source, other.source))));
  };
  function Instruction$SUB(source) {
    Instruction.call(this);
    this.source_ivq7fq$_0 = source;
  }
  Object.defineProperty(Instruction$SUB.prototype, 'source', {
    get: function () {
      return this.source_ivq7fq$_0;
    }
  });
  Instruction$SUB.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SUB',
    interfaces: [Instruction]
  };
  Instruction$SUB.prototype.component1 = function () {
    return this.source;
  };
  Instruction$SUB.prototype.copy_v3qz4q$ = function (source) {
    return new Instruction$SUB(source === void 0 ? this.source : source);
  };
  Instruction$SUB.prototype.toString = function () {
    return 'SUB(source=' + Kotlin.toString(this.source) + ')';
  };
  Instruction$SUB.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.source) | 0;
    return result;
  };
  Instruction$SUB.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.source, other.source))));
  };
  function Instruction$MOV(source, destination) {
    Instruction.call(this);
    this.source_pzsqh2$_0 = source;
    this.destination = destination;
  }
  Object.defineProperty(Instruction$MOV.prototype, 'source', {
    get: function () {
      return this.source_pzsqh2$_0;
    }
  });
  Instruction$MOV.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MOV',
    interfaces: [Instruction]
  };
  Instruction$MOV.prototype.component1 = function () {
    return this.source;
  };
  Instruction$MOV.prototype.component2 = function () {
    return this.destination;
  };
  Instruction$MOV.prototype.copy_gr0otf$ = function (source, destination) {
    return new Instruction$MOV(source === void 0 ? this.source : source, destination === void 0 ? this.destination : destination);
  };
  Instruction$MOV.prototype.toString = function () {
    return 'MOV(source=' + Kotlin.toString(this.source) + (', destination=' + Kotlin.toString(this.destination)) + ')';
  };
  Instruction$MOV.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.source) | 0;
    result = result * 31 + Kotlin.hashCode(this.destination) | 0;
    return result;
  };
  Instruction$MOV.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.source, other.source) && Kotlin.equals(this.destination, other.destination)))));
  };
  function Instruction$JMP(label) {
    Instruction.call(this);
    this.label = label;
  }
  Instruction$JMP.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JMP',
    interfaces: [Instruction]
  };
  Instruction$JMP.prototype.component1 = function () {
    return this.label;
  };
  Instruction$JMP.prototype.copy_lsn8y1$ = function (label) {
    return new Instruction$JMP(label === void 0 ? this.label : label);
  };
  Instruction$JMP.prototype.toString = function () {
    return 'JMP(label=' + Kotlin.toString(this.label) + ')';
  };
  Instruction$JMP.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    return result;
  };
  Instruction$JMP.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.label, other.label))));
  };
  function Instruction$JEZ(label) {
    Instruction.call(this);
    this.label = label;
  }
  Instruction$JEZ.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JEZ',
    interfaces: [Instruction]
  };
  Instruction$JEZ.prototype.component1 = function () {
    return this.label;
  };
  Instruction$JEZ.prototype.copy_lsn8y1$ = function (label) {
    return new Instruction$JEZ(label === void 0 ? this.label : label);
  };
  Instruction$JEZ.prototype.toString = function () {
    return 'JEZ(label=' + Kotlin.toString(this.label) + ')';
  };
  Instruction$JEZ.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    return result;
  };
  Instruction$JEZ.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.label, other.label))));
  };
  function Instruction$JNZ(label) {
    Instruction.call(this);
    this.label = label;
  }
  Instruction$JNZ.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JNZ',
    interfaces: [Instruction]
  };
  Instruction$JNZ.prototype.component1 = function () {
    return this.label;
  };
  Instruction$JNZ.prototype.copy_lsn8y1$ = function (label) {
    return new Instruction$JNZ(label === void 0 ? this.label : label);
  };
  Instruction$JNZ.prototype.toString = function () {
    return 'JNZ(label=' + Kotlin.toString(this.label) + ')';
  };
  Instruction$JNZ.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    return result;
  };
  Instruction$JNZ.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.label, other.label))));
  };
  function Instruction$JGZ(label) {
    Instruction.call(this);
    this.label = label;
  }
  Instruction$JGZ.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JGZ',
    interfaces: [Instruction]
  };
  Instruction$JGZ.prototype.component1 = function () {
    return this.label;
  };
  Instruction$JGZ.prototype.copy_lsn8y1$ = function (label) {
    return new Instruction$JGZ(label === void 0 ? this.label : label);
  };
  Instruction$JGZ.prototype.toString = function () {
    return 'JGZ(label=' + Kotlin.toString(this.label) + ')';
  };
  Instruction$JGZ.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    return result;
  };
  Instruction$JGZ.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.label, other.label))));
  };
  function Instruction$JLZ(label) {
    Instruction.call(this);
    this.label = label;
  }
  Instruction$JLZ.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JLZ',
    interfaces: [Instruction]
  };
  Instruction$JLZ.prototype.component1 = function () {
    return this.label;
  };
  Instruction$JLZ.prototype.copy_lsn8y1$ = function (label) {
    return new Instruction$JLZ(label === void 0 ? this.label : label);
  };
  Instruction$JLZ.prototype.toString = function () {
    return 'JLZ(label=' + Kotlin.toString(this.label) + ')';
  };
  Instruction$JLZ.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.label) | 0;
    return result;
  };
  Instruction$JLZ.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.label, other.label))));
  };
  function Instruction$JRO(source) {
    Instruction.call(this);
    this.source_lgvzlf$_0 = source;
  }
  Object.defineProperty(Instruction$JRO.prototype, 'source', {
    get: function () {
      return this.source_lgvzlf$_0;
    }
  });
  Instruction$JRO.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JRO',
    interfaces: [Instruction]
  };
  Instruction$JRO.prototype.component1 = function () {
    return this.source;
  };
  Instruction$JRO.prototype.copy_v3qz4q$ = function (source) {
    return new Instruction$JRO(source === void 0 ? this.source : source);
  };
  Instruction$JRO.prototype.toString = function () {
    return 'JRO(source=' + Kotlin.toString(this.source) + ')';
  };
  Instruction$JRO.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.source) | 0;
    return result;
  };
  Instruction$JRO.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.source, other.source))));
  };
  Object.defineProperty(Instruction.prototype, 'source', {
    get: function () {
      return this.source_afgdis$_0;
    }
  });
  Instruction.prototype.toString = function () {
    return this.name;
  };
  function Instruction$Companion() {
    Instruction$Companion_instance = this;
  }
  Instruction$Companion.prototype.createNullary_wzp82v$ = function (opcode) {
    if (equals(opcode, Opcode$NOP_getInstance()))
      return Instruction$NOP_getInstance();
    else if (equals(opcode, Opcode$SWP_getInstance()))
      return Instruction$SWP_getInstance();
    else if (equals(opcode, Opcode$SAV_getInstance()))
      return Instruction$SAV_getInstance();
    else if (equals(opcode, Opcode$NEG_getInstance()))
      return Instruction$NEG_getInstance();
    else
      throw new NoWhenBranchMatchedException(opcode.toString());
  };
  Instruction$Companion.prototype.createUnary_wxgz3b$ = function (opcode, source) {
    if (equals(opcode, Opcode$ADD_getInstance()))
      return new Instruction$ADD(source);
    else if (equals(opcode, Opcode$SUB_getInstance()))
      return new Instruction$SUB(source);
    else if (equals(opcode, Opcode$JRO_getInstance()))
      return new Instruction$JRO(source);
    else
      throw new NoWhenBranchMatchedException(opcode.toString());
  };
  Instruction$Companion.prototype.createJump_ji8z62$ = function (opcode, label) {
    if (equals(opcode, Opcode$JMP_getInstance()))
      return new Instruction$JMP(label);
    else if (equals(opcode, Opcode$JEZ_getInstance()))
      return new Instruction$JEZ(label);
    else if (equals(opcode, Opcode$JNZ_getInstance()))
      return new Instruction$JNZ(label);
    else if (equals(opcode, Opcode$JGZ_getInstance()))
      return new Instruction$JGZ(label);
    else if (equals(opcode, Opcode$JLZ_getInstance()))
      return new Instruction$JLZ(label);
    else
      throw new NoWhenBranchMatchedException(opcode.toString());
  };
  Instruction$Companion.prototype.createMov_gr0otf$ = function (source, destination) {
    return new Instruction$MOV(source, destination);
  };
  Instruction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Instruction$Companion_instance = null;
  function Instruction$Companion_getInstance() {
    if (Instruction$Companion_instance === null) {
      new Instruction$Companion();
    }
    return Instruction$Companion_instance;
  }
  Instruction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Instruction',
    interfaces: []
  };
  function Opcode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Opcode_initFields() {
    Opcode_initFields = function () {
    };
    Opcode$NOP_instance = new Opcode('NOP', 0);
    Opcode$SWP_instance = new Opcode('SWP', 1);
    Opcode$SAV_instance = new Opcode('SAV', 2);
    Opcode$NEG_instance = new Opcode('NEG', 3);
    Opcode$ADD_instance = new Opcode('ADD', 4);
    Opcode$SUB_instance = new Opcode('SUB', 5);
    Opcode$MOV_instance = new Opcode('MOV', 6);
    Opcode$JMP_instance = new Opcode('JMP', 7);
    Opcode$JEZ_instance = new Opcode('JEZ', 8);
    Opcode$JNZ_instance = new Opcode('JNZ', 9);
    Opcode$JGZ_instance = new Opcode('JGZ', 10);
    Opcode$JLZ_instance = new Opcode('JLZ', 11);
    Opcode$JRO_instance = new Opcode('JRO', 12);
    Opcode$Companion_getInstance();
  }
  var Opcode$NOP_instance;
  function Opcode$NOP_getInstance() {
    Opcode_initFields();
    return Opcode$NOP_instance;
  }
  var Opcode$SWP_instance;
  function Opcode$SWP_getInstance() {
    Opcode_initFields();
    return Opcode$SWP_instance;
  }
  var Opcode$SAV_instance;
  function Opcode$SAV_getInstance() {
    Opcode_initFields();
    return Opcode$SAV_instance;
  }
  var Opcode$NEG_instance;
  function Opcode$NEG_getInstance() {
    Opcode_initFields();
    return Opcode$NEG_instance;
  }
  var Opcode$ADD_instance;
  function Opcode$ADD_getInstance() {
    Opcode_initFields();
    return Opcode$ADD_instance;
  }
  var Opcode$SUB_instance;
  function Opcode$SUB_getInstance() {
    Opcode_initFields();
    return Opcode$SUB_instance;
  }
  var Opcode$MOV_instance;
  function Opcode$MOV_getInstance() {
    Opcode_initFields();
    return Opcode$MOV_instance;
  }
  var Opcode$JMP_instance;
  function Opcode$JMP_getInstance() {
    Opcode_initFields();
    return Opcode$JMP_instance;
  }
  var Opcode$JEZ_instance;
  function Opcode$JEZ_getInstance() {
    Opcode_initFields();
    return Opcode$JEZ_instance;
  }
  var Opcode$JNZ_instance;
  function Opcode$JNZ_getInstance() {
    Opcode_initFields();
    return Opcode$JNZ_instance;
  }
  var Opcode$JGZ_instance;
  function Opcode$JGZ_getInstance() {
    Opcode_initFields();
    return Opcode$JGZ_instance;
  }
  var Opcode$JLZ_instance;
  function Opcode$JLZ_getInstance() {
    Opcode_initFields();
    return Opcode$JLZ_instance;
  }
  var Opcode$JRO_instance;
  function Opcode$JRO_getInstance() {
    Opcode_initFields();
    return Opcode$JRO_instance;
  }
  Opcode.prototype.arity = function () {
    if (equals(this, Opcode$NOP_getInstance()))
      return 0;
    else if (equals(this, Opcode$SWP_getInstance()))
      return 0;
    else if (equals(this, Opcode$SAV_getInstance()))
      return 0;
    else if (equals(this, Opcode$NEG_getInstance()))
      return 0;
    else if (equals(this, Opcode$ADD_getInstance()))
      return 1;
    else if (equals(this, Opcode$SUB_getInstance()))
      return 1;
    else if (equals(this, Opcode$MOV_getInstance()))
      return 2;
    else if (equals(this, Opcode$JMP_getInstance()))
      return 1;
    else if (equals(this, Opcode$JEZ_getInstance()))
      return 1;
    else if (equals(this, Opcode$JNZ_getInstance()))
      return 1;
    else if (equals(this, Opcode$JGZ_getInstance()))
      return 1;
    else if (equals(this, Opcode$JLZ_getInstance()))
      return 1;
    else if (equals(this, Opcode$JRO_getInstance()))
      return 1;
    else
      return Kotlin.noWhenBranchMatched();
  };
  function Opcode$Companion() {
    Opcode$Companion_instance = this;
  }
  Opcode$Companion.prototype.parse_61zpoe$ = function (string) {
    if (equals(string, 'NOP'))
      return Opcode$NOP_getInstance();
    else if (equals(string, 'SWP'))
      return Opcode$SWP_getInstance();
    else if (equals(string, 'SAV'))
      return Opcode$SAV_getInstance();
    else if (equals(string, 'NEG'))
      return Opcode$NEG_getInstance();
    else if (equals(string, 'ADD'))
      return Opcode$ADD_getInstance();
    else if (equals(string, 'SUB'))
      return Opcode$SUB_getInstance();
    else if (equals(string, 'MOV'))
      return Opcode$MOV_getInstance();
    else if (equals(string, 'JMP'))
      return Opcode$JMP_getInstance();
    else if (equals(string, 'JEZ'))
      return Opcode$JEZ_getInstance();
    else if (equals(string, 'JNZ'))
      return Opcode$JNZ_getInstance();
    else if (equals(string, 'JGZ'))
      return Opcode$JGZ_getInstance();
    else if (equals(string, 'JLZ'))
      return Opcode$JLZ_getInstance();
    else if (equals(string, 'JRO'))
      return Opcode$JRO_getInstance();
    else
      return null;
  };
  Opcode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Opcode$Companion_instance = null;
  function Opcode$Companion_getInstance() {
    Opcode_initFields();
    if (Opcode$Companion_instance === null) {
      new Opcode$Companion();
    }
    return Opcode$Companion_instance;
  }
  Opcode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Opcode',
    interfaces: [Enum]
  };
  function Opcode$values() {
    return [Opcode$NOP_getInstance(), Opcode$SWP_getInstance(), Opcode$SAV_getInstance(), Opcode$NEG_getInstance(), Opcode$ADD_getInstance(), Opcode$SUB_getInstance(), Opcode$MOV_getInstance(), Opcode$JMP_getInstance(), Opcode$JEZ_getInstance(), Opcode$JNZ_getInstance(), Opcode$JGZ_getInstance(), Opcode$JLZ_getInstance(), Opcode$JRO_getInstance()];
  }
  Opcode.values = Opcode$values;
  function Opcode$valueOf(name) {
    switch (name) {
      case 'NOP':
        return Opcode$NOP_getInstance();
      case 'SWP':
        return Opcode$SWP_getInstance();
      case 'SAV':
        return Opcode$SAV_getInstance();
      case 'NEG':
        return Opcode$NEG_getInstance();
      case 'ADD':
        return Opcode$ADD_getInstance();
      case 'SUB':
        return Opcode$SUB_getInstance();
      case 'MOV':
        return Opcode$MOV_getInstance();
      case 'JMP':
        return Opcode$JMP_getInstance();
      case 'JEZ':
        return Opcode$JEZ_getInstance();
      case 'JNZ':
        return Opcode$JNZ_getInstance();
      case 'JGZ':
        return Opcode$JGZ_getInstance();
      case 'JLZ':
        return Opcode$JLZ_getInstance();
      case 'JRO':
        return Opcode$JRO_getInstance();
      default:throwISE('No enum constant lang.syntax.Opcode.' + name);
    }
  }
  Opcode.valueOf_61zpoe$ = Opcode$valueOf;
  function Source() {
  }
  Source.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Source',
    interfaces: []
  };
  function Destination() {
  }
  Destination.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Destination',
    interfaces: [Source]
  };
  function ACC() {
    ACC_instance = this;
  }
  ACC.prototype.toString = function () {
    return 'ACC';
  };
  ACC.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ACC',
    interfaces: [Destination, Source]
  };
  var ACC_instance = null;
  function ACC_getInstance() {
    if (ACC_instance === null) {
      new ACC();
    }
    return ACC_instance;
  }
  function Label(name) {
    this.name = name;
  }
  Label.prototype.toString = function () {
    return this.name + ':';
  };
  Label.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Label',
    interfaces: []
  };
  Label.prototype.component1 = function () {
    return this.name;
  };
  Label.prototype.copy_61zpoe$ = function (name) {
    return new Label(name === void 0 ? this.name : name);
  };
  Label.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  Label.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function Constant(number) {
    this.number = number;
  }
  Constant.prototype.toString = function () {
    return this.number.toString();
  };
  Constant.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Constant',
    interfaces: [Source]
  };
  function NIL() {
    NIL_instance = this;
    Constant.call(this, 0);
  }
  NIL.prototype.toString = function () {
    return 'NIL';
  };
  NIL.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NIL',
    interfaces: [Destination, Constant]
  };
  var NIL_instance = null;
  function NIL_getInstance() {
    if (NIL_instance === null) {
      new NIL();
    }
    return NIL_instance;
  }
  function Port() {
  }
  function Port$ANY() {
    Port$ANY_instance = this;
    Port.call(this);
  }
  Port$ANY.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ANY',
    interfaces: [Port]
  };
  var Port$ANY_instance = null;
  function Port$ANY_getInstance() {
    if (Port$ANY_instance === null) {
      new Port$ANY();
    }
    return Port$ANY_instance;
  }
  function Port$LAST() {
    Port$LAST_instance = this;
    Port.call(this);
  }
  Port$LAST.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LAST',
    interfaces: [Port]
  };
  var Port$LAST_instance = null;
  function Port$LAST_getInstance() {
    if (Port$LAST_instance === null) {
      new Port$LAST();
    }
    return Port$LAST_instance;
  }
  Port.prototype.toString = function () {
    if (Kotlin.isType(this, Port$ANY))
      return 'ANY';
    else if (Kotlin.isType(this, Port$LAST))
      return 'LAST';
    else if (Kotlin.isType(this, Direction$UP))
      return 'UP';
    else if (Kotlin.isType(this, Direction$LEFT))
      return 'LEFT';
    else if (Kotlin.isType(this, Direction$DOWN))
      return 'DOWN';
    else if (Kotlin.isType(this, Direction$RIGHT))
      return 'RIGHT';
    else
      return Kotlin.noWhenBranchMatched();
  };
  Port.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Port',
    interfaces: [Destination, Source]
  };
  function Direction() {
    Direction$Companion_getInstance();
    Port.call(this);
  }
  function Direction$UP() {
    Direction$UP_instance = this;
    Direction.call(this);
  }
  Direction$UP.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'UP',
    interfaces: [Direction]
  };
  var Direction$UP_instance = null;
  function Direction$UP_getInstance() {
    if (Direction$UP_instance === null) {
      new Direction$UP();
    }
    return Direction$UP_instance;
  }
  function Direction$LEFT() {
    Direction$LEFT_instance = this;
    Direction.call(this);
  }
  Direction$LEFT.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LEFT',
    interfaces: [Direction]
  };
  var Direction$LEFT_instance = null;
  function Direction$LEFT_getInstance() {
    if (Direction$LEFT_instance === null) {
      new Direction$LEFT();
    }
    return Direction$LEFT_instance;
  }
  function Direction$DOWN() {
    Direction$DOWN_instance = this;
    Direction.call(this);
  }
  Direction$DOWN.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DOWN',
    interfaces: [Direction]
  };
  var Direction$DOWN_instance = null;
  function Direction$DOWN_getInstance() {
    if (Direction$DOWN_instance === null) {
      new Direction$DOWN();
    }
    return Direction$DOWN_instance;
  }
  function Direction$RIGHT() {
    Direction$RIGHT_instance = this;
    Direction.call(this);
  }
  Direction$RIGHT.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'RIGHT',
    interfaces: [Direction]
  };
  var Direction$RIGHT_instance = null;
  function Direction$RIGHT_getInstance() {
    if (Direction$RIGHT_instance === null) {
      new Direction$RIGHT();
    }
    return Direction$RIGHT_instance;
  }
  function Direction$Companion() {
    Direction$Companion_instance = this;
    this.all = listOf_0([Direction$UP_getInstance(), Direction$LEFT_getInstance(), Direction$RIGHT_getInstance(), Direction$DOWN_getInstance()]);
  }
  Direction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Direction$Companion_instance = null;
  function Direction$Companion_getInstance() {
    if (Direction$Companion_instance === null) {
      new Direction$Companion();
    }
    return Direction$Companion_instance;
  }
  Direction.prototype.opposite = function () {
    if (equals(this, Direction$UP_getInstance()))
      return Direction$DOWN_getInstance();
    else if (equals(this, Direction$LEFT_getInstance()))
      return Direction$RIGHT_getInstance();
    else if (equals(this, Direction$DOWN_getInstance()))
      return Direction$UP_getInstance();
    else if (equals(this, Direction$RIGHT_getInstance()))
      return Direction$LEFT_getInstance();
    else
      return Kotlin.noWhenBranchMatched();
  };
  Direction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Direction',
    interfaces: [Port]
  };
  function Line(label, instruction, comment, hasBreakpoint) {
    this.label = label;
    this.instruction = instruction;
    this.comment = comment;
    this.hasBreakpoint = hasBreakpoint;
  }
  Line.prototype.toString = function () {
    var tmp$, tmp$_0;
    return '' + toString((tmp$ = this.label) != null ? tmp$ : '') + toString((tmp$_0 = this.instruction) != null ? tmp$_0 : '') + (this.comment != null ? '#' + this.comment : '');
  };
  Line.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Line',
    interfaces: []
  };
  function SyntaxList(lines) {
    this.lines = lines;
    var $receiver = this.lines;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.instruction != null)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination_0.add_11rb$(item.instruction);
    }
    this.instructions = destination_0;
  }
  SyntaxList.prototype.toString = function () {
    return joinToString(this.lines, '\n');
  };
  SyntaxList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SyntaxList',
    interfaces: []
  };
  function Parser() {
    Parser_instance = this;
  }
  function Parser$Location(lineNumber, columnRange) {
    this.lineNumber = lineNumber;
    this.columnRange = columnRange;
  }
  Parser$Location.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Location',
    interfaces: []
  };
  Parser$Location.prototype.component1 = function () {
    return this.lineNumber;
  };
  Parser$Location.prototype.component2 = function () {
    return this.columnRange;
  };
  Parser$Location.prototype.copy_4xt46b$ = function (lineNumber, columnRange) {
    return new Parser$Location(lineNumber === void 0 ? this.lineNumber : lineNumber, columnRange === void 0 ? this.columnRange : columnRange);
  };
  Parser$Location.prototype.toString = function () {
    return 'Location(lineNumber=' + Kotlin.toString(this.lineNumber) + (', columnRange=' + Kotlin.toString(this.columnRange)) + ')';
  };
  Parser$Location.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lineNumber) | 0;
    result = result * 31 + Kotlin.hashCode(this.columnRange) | 0;
    return result;
  };
  Parser$Location.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.lineNumber, other.lineNumber) && Kotlin.equals(this.columnRange, other.columnRange)))));
  };
  function Parser$Error() {
  }
  function Parser$Error$InvalidLabel() {
    Parser$Error.call(this);
  }
  Parser$Error$InvalidLabel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidLabel',
    interfaces: [Parser$Error]
  };
  function Parser$Error$LabelIsAlreadyDefined() {
    Parser$Error.call(this);
  }
  Parser$Error$LabelIsAlreadyDefined.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LabelIsAlreadyDefined',
    interfaces: [Parser$Error]
  };
  function Parser$Error$InvalidOpcode(opcodeName) {
    Parser$Error.call(this);
    this.opcodeName = opcodeName;
  }
  Parser$Error$InvalidOpcode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidOpcode',
    interfaces: [Parser$Error]
  };
  function Parser$Error$MissingOperand() {
    Parser$Error.call(this);
  }
  Parser$Error$MissingOperand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MissingOperand',
    interfaces: [Parser$Error]
  };
  function Parser$Error$TooManyOperands() {
    Parser$Error.call(this);
  }
  Parser$Error$TooManyOperands.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TooManyOperands',
    interfaces: [Parser$Error]
  };
  function Parser$Error$InvalidExpression(expressionName) {
    Parser$Error.call(this);
    this.expressionName = expressionName;
  }
  Parser$Error$InvalidExpression.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidExpression',
    interfaces: [Parser$Error]
  };
  function Parser$Error$InvalidRegister(registerName) {
    Parser$Error.call(this);
    this.registerName = registerName;
  }
  Parser$Error$InvalidRegister.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InvalidRegister',
    interfaces: [Parser$Error]
  };
  function Parser$Error$UndefinedLabel() {
    Parser$Error.call(this);
  }
  Parser$Error$UndefinedLabel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UndefinedLabel',
    interfaces: [Parser$Error]
  };
  Parser$Error.prototype.toString = function () {
    if (Kotlin.isType(this, Parser$Error$LabelIsAlreadyDefined))
      return 'LABEL IS ALREADY DEFINED';
    else if (Kotlin.isType(this, Parser$Error$InvalidOpcode))
      return 'INVALID OPCODE ' + '"' + this.opcodeName + '"';
    else if (Kotlin.isType(this, Parser$Error$MissingOperand))
      return 'MISSING OPERAND';
    else if (Kotlin.isType(this, Parser$Error$TooManyOperands))
      return 'TOO MANY OPERANDS';
    else if (Kotlin.isType(this, Parser$Error$InvalidExpression))
      return 'INVALID EXPRESSION ' + '"' + this.expressionName + '"';
    else if (Kotlin.isType(this, Parser$Error$InvalidRegister))
      return 'INVALID REGISTER ' + '"' + this.registerName + '"';
    else if (Kotlin.isType(this, Parser$Error$UndefinedLabel))
      return 'UNDEFINED LABEL';
    else if (Kotlin.isType(this, Parser$Error$InvalidLabel))
      return 'INVALID LABEL';
    else
      return Kotlin.noWhenBranchMatched();
  };
  Parser$Error.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Error',
    interfaces: []
  };
  Parser.prototype.parse_61zpoe$ = function (sourceCode) {
    var errors = ArrayList_init();
    var lineList = ArrayList_init();
    var $receiver = lines(sourceCode.toUpperCase());
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(replace(item, ',', ' '));
    }
    var lines_0 = destination;
    var tmp$_0 = this.findLabels_0;
    var destination_0 = ArrayList_init(collectionSizeOrDefault(lines_0, 10));
    var tmp$_1;
    tmp$_1 = lines_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_0.add_11rb$(replaceFirst(item_0, '!', ' '));
    }
    var tmp$_2 = tmp$_0.call(this, destination_0);
    var declaredLabels = tmp$_2.component1()
    , duplicateLabelErrors = tmp$_2.component2();
    errors.addAll_brywnq$(duplicateLabelErrors);
    var tmp$_3;
    tmp$_3 = withIndex(lines_0).iterator();
    while (tmp$_3.hasNext()) {
      var element = tmp$_3.next();
      var index = element.component1()
      , line = element.component2();
      var hasBreakpoint = contains(line, 33);
      var line2 = replaceFirst(line, '!', ' ');
      var lineNumber = index + 1 | 0;
      var tmp$_4 = this.splitComment_0(line2);
      var code = tmp$_4.component1()
      , comment = tmp$_4.component2();
      var result = this.parseCode_0(code, lineNumber, declaredLabels);
      if (Kotlin.isType(result, Result$Failure))
        errors.add_11rb$(result.error);
      else if (Kotlin.isType(result, Result$Success)) {
        var tmp$_5 = result.item;
        var label = tmp$_5.component1()
        , instruction = tmp$_5.component2();
        lineList.add_11rb$(new Line(label, instruction, comment, hasBreakpoint));
      }
       else
        Kotlin.noWhenBranchMatched();
    }
    return errors.size > 0 ? new Result$Failure(toList_0(errors)) : new Result$Success(new SyntaxList(lineList));
  };
  function Parser$findLabels$label(this$Parser) {
    return function (line) {
      var code = this$Parser.splitComment_0(line).component1();
      var labelName = this$Parser.splitLabel_0(code).component1();
      return labelName;
    };
  }
  var mapNotNullTo$lambda = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  var mapNotNullTo$lambda_0 = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  Parser.prototype.findLabels_0 = function (lines) {
    var label = Parser$findLabels$label(this);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = lines.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if ((tmp$_0 = label(element)) != null) {
        destination.add_11rb$(tmp$_0);
      }
    }
    var labelNames = destination;
    var destination_0 = LinkedHashMap_init();
    var tmp$_1;
    tmp$_1 = labelNames.iterator();
    while (tmp$_1.hasNext()) {
      var element_0 = tmp$_1.next();
      var key = element_0;
      var tmp$_0_0;
      var value = destination_0.get_11rb$(key);
      if (value == null) {
        var answer = ArrayList_init();
        destination_0.put_xwzc9p$(key, answer);
        tmp$_0_0 = answer;
      }
       else {
        tmp$_0_0 = value;
      }
      var list = tmp$_0_0;
      list.add_11rb$(element_0);
    }
    var destination_1 = LinkedHashMap_init();
    var tmp$_2;
    tmp$_2 = destination_0.entries.iterator();
    while (tmp$_2.hasNext()) {
      var element_1 = tmp$_2.next();
      if (element_1.value.size > 1) {
        destination_1.put_xwzc9p$(element_1.key, element_1.value);
      }
    }
    var destination_2 = ArrayList_init(destination_1.size);
    var tmp$_3;
    tmp$_3 = destination_1.entries.iterator();
    while (tmp$_3.hasNext()) {
      var item = tmp$_3.next();
      destination_2.add_11rb$(item.key);
    }
    var duplicateLabelNames = toSet(destination_2);
    var $receiver = withIndex(lines);
    var destination_3 = ArrayList_init();
    var tmp$_4;
    tmp$_4 = $receiver.iterator();
    while (tmp$_4.hasNext()) {
      var element_2 = tmp$_4.next();
      var tmp$_0_1;
      var index = element_2.component1()
      , line = element_2.component2();
      var labelName = label(line);
      if ((tmp$_0_1 = labelName != null && duplicateLabelNames.contains_11rb$(labelName) ? new Parser$Error$LabelIsAlreadyDefined() : null) != null) {
        destination_3.add_11rb$(tmp$_0_1);
      }
    }
    var errors = destination_3;
    var destination_4 = ArrayList_init(collectionSizeOrDefault(labelNames, 10));
    var tmp$_5;
    tmp$_5 = labelNames.iterator();
    while (tmp$_5.hasNext()) {
      var item_0 = tmp$_5.next();
      destination_4.add_11rb$(new Label(item_0));
    }
    var labels = toSet(destination_4);
    return new Pair(labels, errors);
  };
  Parser.prototype.splitComment_0 = function (line) {
    var tmp$;
    return (tmp$ = this.splitOnFirst_0('#', line)) != null ? tmp$ : new Pair(line, null);
  };
  Parser.prototype.splitLabel_0 = function (code) {
    var tmp$;
    return (tmp$ = this.splitOnFirst_0(':', code)) != null ? tmp$ : new Pair(null, code);
  };
  Parser.prototype.splitOnFirst_0 = function (delimiter, input) {
    var parts = split(input, [delimiter]);
    var tmp$;
    if (parts.size > 1) {
      var tmp$_0 = parts.get_za3lpa$(0);
      var startIndex = parts.get_za3lpa$(0).length + delimiter.length | 0;
      tmp$ = new Pair(tmp$_0, input.substring(startIndex));
    }
     else
      tmp$ = null;
    return tmp$;
  };
  function Parser$parseCode$lambda(closure$labelName, closure$lineNumber) {
    return function (columnRange) {
      var tmp$;
      var labelLength = 1 + ((tmp$ = closure$labelName != null ? closure$labelName.length : null) != null ? tmp$ : 0) | 0;
      return new Parser$Location(closure$lineNumber, new IntRange(columnRange.start + labelLength | 0, columnRange.endInclusive + labelLength | 0));
    };
  }
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  Parser.prototype.parseCode_0 = function (code, lineNumber, declaredLabels) {
    var tmp$;
    var tmp$_0 = this.splitLabel_0(code);
    var labelName = tmp$_0.component1()
    , inst = tmp$_0.component2();
    var label = labelName != null ? new Label(labelName) : null;
    var tmp$_1;
    var trimmed = trim(Kotlin.isCharSequence(tmp$_1 = inst) ? tmp$_1 : throwCCE()).toString();
    if (equals(trimmed, ''))
      return new Result$Success(new Pair(null, null));
    var $receiver = split(trimmed, [' ']);
    var destination = ArrayList_init();
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      if (!equals(element, ''))
        destination.add_11rb$(element);
    }
    var parts = destination;
    var at = Parser$parseCode$lambda(labelName, lineNumber);
    var opcodeName = parts.get_za3lpa$(0);
    var opcode = Opcode$Companion_getInstance().parse_61zpoe$(opcodeName);
    if (opcode == null)
      return new Result$Failure(new Parser$Error$InvalidOpcode(opcodeName));
    var actualArity = parts.size - 1 | 0;
    var expectedArity = opcode.arity();
    if (actualArity < expectedArity)
      return new Result$Failure(new Parser$Error$MissingOperand());
    else if (actualArity > expectedArity)
      return new Result$Failure(new Parser$Error$TooManyOperands());
    if (equals(opcode, Opcode$NOP_getInstance()) || equals(opcode, Opcode$SWP_getInstance()) || equals(opcode, Opcode$SAV_getInstance()) || equals(opcode, Opcode$NEG_getInstance()))
      tmp$ = new Result$Success(new Pair(label, Instruction$Companion_getInstance().createNullary_wzp82v$(opcode)));
    else if (equals(opcode, Opcode$ADD_getInstance()) || equals(opcode, Opcode$SUB_getInstance()) || equals(opcode, Opcode$JRO_getInstance())) {
      var source = this.parseSource_0(parts.get_za3lpa$(1));
      return source == null ? new Result$Failure(new Parser$Error$InvalidExpression(parts.get_za3lpa$(1))) : new Result$Success(new Pair(label, Instruction$Companion_getInstance().createUnary_wxgz3b$(opcode, source)));
    }
     else if (equals(opcode, Opcode$MOV_getInstance())) {
      var source_0 = this.parseSource_0(parts.get_za3lpa$(1));
      if (source_0 == null)
        return new Result$Failure(new Parser$Error$InvalidExpression(parts.get_za3lpa$(1)));
      var destination_0 = this.parseDestination_0(parts.get_za3lpa$(2));
      if (destination_0 == null)
        return new Result$Failure(new Parser$Error$InvalidRegister(parts.get_za3lpa$(2)));
      return new Result$Success(new Pair(label, Instruction$Companion_getInstance().createMov_gr0otf$(source_0, destination_0)));
    }
     else if (equals(opcode, Opcode$JMP_getInstance()) || equals(opcode, Opcode$JEZ_getInstance()) || equals(opcode, Opcode$JNZ_getInstance()) || equals(opcode, Opcode$JGZ_getInstance()) || equals(opcode, Opcode$JLZ_getInstance())) {
      var targetLabel = this.parseLabel_0(last(parts), declaredLabels);
      return targetLabel == null ? new Result$Failure(new Parser$Error$UndefinedLabel()) : new Result$Success(new Pair(label, Instruction$Companion_getInstance().createJump_ji8z62$(opcode, targetLabel)));
    }
     else
      tmp$ = Kotlin.noWhenBranchMatched();
    return tmp$;
  };
  Parser.prototype.parseLabel_0 = function (labelName, declaredLabels) {
    return declaredLabels.contains_11rb$(new Label(labelName)) ? new Label(labelName) : null;
  };
  Parser.prototype.parseSource_0 = function (token) {
    if (toIntOrNull(token) != null)
      return new Constant(toInt(token));
    else if (this.parseDestination_0(token) != null)
      return this.parseDestination_0(token);
    else
      return null;
  };
  Parser.prototype.parseDestination_0 = function (token) {
    if (equals(token, 'ACC'))
      return ACC_getInstance();
    else if (equals(token, 'NIL'))
      return NIL_getInstance();
    else if (equals(token, 'UP'))
      return Direction$UP_getInstance();
    else if (equals(token, 'DOWN'))
      return Direction$DOWN_getInstance();
    else if (equals(token, 'LEFT'))
      return Direction$LEFT_getInstance();
    else if (equals(token, 'RIGHT'))
      return Direction$RIGHT_getInstance();
    else if (equals(token, 'ANY'))
      return Port$ANY_getInstance();
    else if (equals(token, 'LAST'))
      return Port$LAST_getInstance();
    else
      return null;
  };
  Parser.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Parser',
    interfaces: []
  };
  var Parser_instance = null;
  function Parser_getInstance() {
    if (Parser_instance === null) {
      new Parser();
    }
    return Parser_instance;
  }
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var createElement = Kotlin.kotlin.dom.createElement_7cgwi1$;
  function DOM$newElement$lambda(closure$text, closure$identifier, closure$classes) {
    return function ($receiver) {
      if (closure$text != null) {
        $receiver.appendChild(document.createTextNode(closure$text));
      }
      if (closure$identifier != null)
        $receiver.id = closure$identifier;
      var idAndClasses = plus(listOfNotNull(closure$identifier), closure$classes);
      if (!idAndClasses.isEmpty()) {
        $receiver.className = joinToString(idAndClasses, ' ');
      }
      return Unit;
    };
  }
  function DOM() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15;
    this.gameDiv_0 = Kotlin.isType(tmp$ = document.getElementById('gameDiv'), HTMLDivElement) ? tmp$ : throwCCE();
    this.titleInput = null;
    this.descriptionInput = null;
    this.coreGrid = null;
    this.stopButton = null;
    this.stepButton = null;
    this.playButton = null;
    this.fastButton = null;
    this.veryFastButton = null;
    this.instructionCountDiv = null;
    this.currentCycleDiv = null;
    this.logger = null;
    var identifier = 'titleInput';
    var classes;
    classes = listOfNotNull(identifier);
    var tmp$_16;
    this.titleInput = Kotlin.isType(tmp$_16 = createElement(document, 'input', DOM$newElement$lambda('TITLE', identifier, classes)), HTMLInputElement) ? tmp$_16 : throwCCE();
    this.titleInput.value = 'TITLE';
    var tagName = 'textarea';
    var identifier_0 = 'descriptionInput';
    var text = 'DESCRIPTION';
    var classes_0;
    classes_0 = listOfNotNull(identifier_0);
    var tmp$_17;
    this.descriptionInput = Kotlin.isType(tmp$_17 = createElement(document, tagName, DOM$newElement$lambda(text, identifier_0, classes_0)), HTMLTextAreaElement) ? tmp$_17 : throwCCE();
    var identifier_1 = 'stopButton';
    var classes_1 = listOf('button');
    var tmp$_18;
    this.stopButton = Kotlin.isType(tmp$_18 = createElement(document, 'button', DOM$newElement$lambda('STOP', identifier_1, classes_1)), HTMLButtonElement) ? tmp$_18 : throwCCE();
    var identifier_2 = 'stepButton';
    var classes_2 = listOf('button');
    var tmp$_19;
    this.stepButton = Kotlin.isType(tmp$_19 = createElement(document, 'button', DOM$newElement$lambda('STEP', identifier_2, classes_2)), HTMLButtonElement) ? tmp$_19 : throwCCE();
    var identifier_3 = 'playButton';
    var classes_3 = listOf('button');
    var tmp$_20;
    this.playButton = Kotlin.isType(tmp$_20 = createElement(document, 'button', DOM$newElement$lambda('PLAY', identifier_3, classes_3)), HTMLButtonElement) ? tmp$_20 : throwCCE();
    var identifier_4 = 'fastButton';
    var classes_4 = listOf('button');
    var tmp$_21;
    this.fastButton = Kotlin.isType(tmp$_21 = createElement(document, 'button', DOM$newElement$lambda('FAST', identifier_4, classes_4)), HTMLButtonElement) ? tmp$_21 : throwCCE();
    var identifier_5 = 'veryFastButton';
    var text_0 = 'FASTESTEST';
    var classes_5 = listOf('button');
    var tmp$_22;
    this.veryFastButton = Kotlin.isType(tmp$_22 = createElement(document, 'button', DOM$newElement$lambda(text_0, identifier_5, classes_5)), HTMLButtonElement) ? tmp$_22 : throwCCE();
    var identifier_6 = 'instructionCountDiv';
    var classes_6;
    classes_6 = listOfNotNull(identifier_6);
    var tmp$_23;
    this.instructionCountDiv = Kotlin.isType(tmp$_23 = createElement(document, 'div', DOM$newElement$lambda(null, identifier_6, classes_6)), HTMLDivElement) ? tmp$_23 : throwCCE();
    var identifier_7 = 'currentCycleDiv';
    var classes_7;
    classes_7 = listOfNotNull(identifier_7);
    var tmp$_24;
    this.currentCycleDiv = Kotlin.isType(tmp$_24 = createElement(document, 'div', DOM$newElement$lambda(null, identifier_7, classes_7)), HTMLDivElement) ? tmp$_24 : throwCCE();
    this.logger = new Logger(this, '');
    var tmp$_25;
    tmp$_25 = listOf_0([this.titleInput, this.br(), this.descriptionInput, this.br()]).iterator();
    while (tmp$_25.hasNext()) {
      var element = tmp$_25.next();
      this.gameDiv_0.appendChild(element);
    }
    this.coreGrid = new CoreGrid(this, 'coreGrid', 3, 4);
    this.gameDiv_0.appendChild(this.coreGrid.rootHtmlElement);
    var tmp$_26 = this.stopButton;
    var tmp$_27 = this.stepButton;
    var tmp$_28 = this.playButton;
    var tmp$_29 = this.fastButton;
    var tmp$_30 = this.veryFastButton;
    var tmp$_31 = this.br();
    var tmp$_32 = this.instructionCountDiv;
    var tmp$_33 = this.currentCycleDiv;
    var tmp$_34 = this.br();
    var classes_8;
    classes_8 = listOfNotNull(null);
    var tmp$_35;
    var tmp$_36;
    tmp$_36 = listOf_0([tmp$_26, tmp$_27, tmp$_28, tmp$_29, tmp$_30, tmp$_31, tmp$_32, tmp$_33, tmp$_34, Kotlin.isType(tmp$_35 = createElement(document, 'hr', DOM$newElement$lambda(null, null, classes_8)), HTMLElement) ? tmp$_35 : throwCCE(), this.logger.rootHtmlElement, this.br()]).iterator();
    while (tmp$_36.hasNext()) {
      var element_0 = tmp$_36.next();
      this.gameDiv_0.appendChild(element_0);
    }
    Logger$Companion_getInstance().initDOMLog_ep0k5p$(getCallableRef('log', function ($receiver, s) {
      return $receiver.log_61zpoe$(s), Unit;
    }.bind(null, this.logger)));
    (tmp$_0 = this.coreGrid.cores.get_11rb$(new CorePosition(0, 0))) != null ? (tmp$_0.sourceCode = 'HEY: MOV RIGHT RIGHT # WIDER') : null;
    (tmp$_1 = this.coreGrid.cores.get_11rb$(new CorePosition(1, 0))) != null ? (tmp$_1.sourceCode = 'ADD 1\nNOP\nNOP\nNOP\nNOP\nNOP\nNOP\nNOP\nNOP\nNOP') : null;
    (tmp$_2 = this.coreGrid.cores.get_11rb$(new CorePosition(1, 2))) != null ? (tmp$_2.sourceCode = 'MOV 1 RIGHT\nMOV 999 ACC\nD: SUB 1\nJGZ D\n') : null;
    (tmp$_3 = this.coreGrid.cores.get_11rb$(new CorePosition(2, 2))) != null ? (tmp$_3.sourceCode = 'ADD LEFT') : null;
    var debugComplexMOVPriority = false;
    if (debugComplexMOVPriority) {
      (tmp$_4 = this.coreGrid.cores.get_11rb$(new CorePosition(0, 0))) != null ? (tmp$_4.sourceCode = 'MOV 1 ACC\nMOV ACC ANY\nADD ANY\nADD ANY\nNOP') : null;
      (tmp$_5 = this.coreGrid.cores.get_11rb$(new CorePosition(1, 0))) != null ? (tmp$_5.sourceCode = 'MOV 2 ACC\nADD ANY\nMOV ACC ANY\nMOV ACC ANY\nNOP') : null;
      (tmp$_6 = this.coreGrid.cores.get_11rb$(new CorePosition(2, 0))) != null ? (tmp$_6.sourceCode = 'MOV 4 ACC\nMOV ACC ANY\nADD ANY\nMOV ACC ANY\nNOP') : null;
      (tmp$_7 = this.coreGrid.cores.get_11rb$(new CorePosition(3, 0))) != null ? (tmp$_7.sourceCode = 'MOV 8 ACC\nADD ANY\nMOV ACC ANY\nADD ANY\nNOP') : null;
      (tmp$_8 = this.coreGrid.cores.get_11rb$(new CorePosition(0, 1))) != null ? (tmp$_8.sourceCode = 'MOV 16 ACC\nADD ANY\nMOV ACC ANY\nMOV ACC ANY\nNOP') : null;
      (tmp$_9 = this.coreGrid.cores.get_11rb$(new CorePosition(1, 1))) != null ? (tmp$_9.sourceCode = 'MOV 32 ACC\nMOV ACC ANY\nADD ANY\nADD ANY\nNOP') : null;
      (tmp$_10 = this.coreGrid.cores.get_11rb$(new CorePosition(2, 1))) != null ? (tmp$_10.sourceCode = 'MOV 64 ACC\nADD ANY\nMOV ACC ANY\nADD ANY\nNOP') : null;
      (tmp$_11 = this.coreGrid.cores.get_11rb$(new CorePosition(3, 1))) != null ? (tmp$_11.sourceCode = 'MOV 128 ACC\nMOV ACC ANY\nADD ANY\nMOV ACC ANY\nNOP') : null;
      (tmp$_12 = this.coreGrid.cores.get_11rb$(new CorePosition(0, 2))) != null ? (tmp$_12.sourceCode = 'MOV 64 ACC\nADD ANY\nMOV ACC ANY\nADD ANY\nNOP') : null;
      (tmp$_13 = this.coreGrid.cores.get_11rb$(new CorePosition(1, 2))) != null ? (tmp$_13.sourceCode = 'MOV -8 ACC\nMOV ACC ANY\nADD ANY\nMOV ACC ANY\nNOP') : null;
      (tmp$_14 = this.coreGrid.cores.get_11rb$(new CorePosition(2, 2))) != null ? (tmp$_14.sourceCode = 'MOV 2 ACC\nADD ANY\nMOV ACC ANY\nMOV ACC ANY\nNOP') : null;
      (tmp$_15 = this.coreGrid.cores.get_11rb$(new CorePosition(3, 2))) != null ? (tmp$_15.sourceCode = 'MOV 1 ACC\nMOV ACC ANY\nADD ANY\nADD ANY\nNOP') : null;
    }
  }
  DOM.prototype.newElement_x8yu4y$ = defineInlineFunction('BIX-100.ui.DOM.newElement_x8yu4y$', wrapFunction(function () {
    var listOfNotNull = Kotlin.kotlin.collections.listOfNotNull_issdgt$;
    var plus = Kotlin.kotlin.collections.plus_mydzjv$;
    var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
    var Unit = Kotlin.kotlin.Unit;
    var createElement = Kotlin.kotlin.dom.createElement_7cgwi1$;
    var throwCCE = Kotlin.throwCCE;
    function DOM$newElement$lambda(closure$text, closure$identifier, closure$classes) {
      return function ($receiver) {
        if (closure$text != null) {
          $receiver.appendChild(document.createTextNode(closure$text));
        }
        if (closure$identifier != null)
          $receiver.id = closure$identifier;
        var idAndClasses = plus(listOfNotNull(closure$identifier), closure$classes);
        if (!idAndClasses.isEmpty()) {
          $receiver.className = joinToString(idAndClasses, ' ');
        }
        return Unit;
      };
    }
    return function (T_0, isT, tagName, identifier, text, classes) {
      if (identifier === void 0)
        identifier = null;
      if (text === void 0)
        text = null;
      if (classes === void 0)
        classes = listOfNotNull(identifier);
      var tmp$;
      return isT(tmp$ = createElement(document, tagName, DOM$newElement$lambda(text, identifier, classes))) ? tmp$ : throwCCE();
    };
  }));
  DOM.prototype.newTable_a7f01y$ = function (identifier, rows, f) {
    var tmp$, tmp$_0;
    var classes;
    classes = listOfNotNull(identifier);
    var tmp$_1;
    var table = Kotlin.isType(tmp$_1 = createElement(document, 'table', DOM$newElement$lambda(null, identifier, classes)), HTMLTableElement) ? tmp$_1 : throwCCE();
    tmp$ = withIndex(rows).iterator();
    while (tmp$.hasNext()) {
      var tmp$_2 = tmp$.next();
      var rowIndex = tmp$_2.component1()
      , row = tmp$_2.component2();
      var identifier_0 = identifier + '__tr__' + rowIndex;
      var classes_0;
      classes_0 = listOfNotNull(identifier_0);
      var tmp$_3;
      var tr = Kotlin.isType(tmp$_3 = createElement(document, 'tr', DOM$newElement$lambda(null, identifier_0, classes_0)), HTMLTableRowElement) ? tmp$_3 : throwCCE();
      tmp$_0 = withIndex(row).iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_4 = tmp$_0.next();
        var colIndex = tmp$_4.component1()
        , item = tmp$_4.component2();
        var tag = 'td';
        var identifier_1 = identifier + '__tr__' + rowIndex + '__td__' + colIndex;
        var classes_1;
        classes_1 = listOfNotNull(identifier_1);
        var tmp$_5;
        var td = Kotlin.isType(tmp$_5 = createElement(document, tag, DOM$newElement$lambda(null, identifier_1, classes_1)), HTMLTableCellElement) ? tmp$_5 : throwCCE();
        f(td, item, new Pair(rowIndex, colIndex));
        tr.appendChild(td);
      }
      table.appendChild(tr);
    }
    return table;
  };
  DOM.prototype.br = function () {
    var classes;
    classes = listOfNotNull(null);
    var tmp$;
    return Kotlin.isType(tmp$ = createElement(document, 'br', DOM$newElement$lambda(null, null, classes)), HTMLBRElement) ? tmp$ : throwCCE();
  };
  DOM.prototype.div = function () {
    var classes;
    classes = listOfNotNull(null);
    var tmp$;
    return Kotlin.isType(tmp$ = createElement(document, 'div', DOM$newElement$lambda(null, null, classes)), HTMLDivElement) ? tmp$ : throwCCE();
  };
  DOM.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DOM',
    interfaces: []
  };
  function DOMConstants() {
    DOMConstants$Companion_getInstance();
  }
  function DOMConstants$Companion() {
    DOMConstants$Companion_instance = this;
    this.Event_KeyUp = 'keyup';
    this.Event_OnClick = 'click';
    this.Tag_TextArea = 'textarea';
    this.KeyCode_Down = 40;
    this.KeyCode_Up = 38;
    this.KeyCode_Right = 39;
    this.KeyCode_Left = 37;
  }
  DOMConstants$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DOMConstants$Companion_instance = null;
  function DOMConstants$Companion_getInstance() {
    if (DOMConstants$Companion_instance === null) {
      new DOMConstants$Companion();
    }
    return DOMConstants$Companion_instance;
  }
  DOMConstants.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DOMConstants',
    interfaces: []
  };
  var global;
  function C() {
    this.a = 0;
    this.a = this.m();
  }
  C.prototype.m = function () {
    println(this.a);
    return 5;
  };
  C.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'C',
    interfaces: []
  };
  function main(args) {
    (new C()).a;
    return;
  }
  function tests() {
    Logger$Companion_getInstance().log_61zpoe$('Running tests...');
    parsingTests();
    executionTests();
  }
  function executionTests$lambda(it) {
    assertEq(3, it.acc.number, 'trivial');
    return Unit;
  }
  function executionTests$lambda_0(it) {
    assertEq(3, it.acc.number, 'loop 1');
    return Unit;
  }
  function executionTests$lambda_1(it) {
    assertEq(2, it.acc.number, 'loop 2');
    return Unit;
  }
  function executionTests$lambda_2(it) {
    assertEq(3, it.acc.number, 'label with empty inst');
    return Unit;
  }
  function executionTests$lambda_3(it) {
    assertEq(73, it.get_za3lpa$(2).acc.number, 'MOV timing 1 ');
    return Unit;
  }
  function executionTests$lambda_4(it) {
    assertEq(73, it.get_za3lpa$(0).acc.number, 'MOV timing 2');
    return Unit;
  }
  function executionTests$lambda_5(it) {
    assertEq(42, it.get_za3lpa$(0).acc.number, 'blocking MOV');
    return Unit;
  }
  function executionTests$lambda_6(it) {
    assertEq(7, it.get_za3lpa$(0).acc.number, 'complex MOV priority regression test #0');
    assertEq(3, it.get_za3lpa$(1).acc.number, 'complex MOV priority regression test #1');
    assertEq(16, it.get_za3lpa$(2).acc.number, 'complex MOV priority regression test #2');
    assertEq(28, it.get_za3lpa$(3).acc.number, 'complex MOV priority regression test #3');
    assertEq(48, it.get_za3lpa$(4).acc.number, 'complex MOV priority regression test #4');
    assertEq(128, it.get_za3lpa$(5).acc.number, 'complex MOV priority regression test #5');
    assertEq(512, it.get_za3lpa$(6).acc.number, 'complex MOV priority regression test #6');
    assertEq(320, it.get_za3lpa$(7).acc.number, 'complex MOV priority regression test #7');
    assertEq(104, it.get_za3lpa$(8).acc.number, 'complex MOV priority regression test #8');
    assertEq(48, it.get_za3lpa$(9).acc.number, 'complex MOV priority regression test #9');
    assertEq(3, it.get_za3lpa$(10).acc.number, 'complex MOV priority regression test #10');
    assertEq(7, it.get_za3lpa$(11).acc.number, 'complex MOV priority regression test #11');
    return Unit;
  }
  function executionTests() {
    testSingleCore(2, 'ADD 1\nADD 2\nADD 4\nADD 8', executionTests$lambda);
    testSingleCore(5, 'ADD 5\nD:SUB 1\nJGZ D\nNOP', executionTests$lambda_0);
    testSingleCore(6, 'ADD 5\nD:SUB 1\nJGZ D\nNOP', executionTests$lambda_1);
    testSingleCore(5, 'ADD 5\nD:\nSUB 1\nJGZ D\nNOP', executionTests$lambda_2);
    testCores(3, listOf_0(['MOV 73 RIGHT', 'MOV LEFT RIGHT', 'MOV LEFT ACC\nADD 100']), executionTests$lambda_3);
    testCores(3, listOf_0(['MOV RIGHT ACC\nADD 100', 'MOV RIGHT LEFT', 'MOV 73 LEFT']), executionTests$lambda_4);
    testCores(4, listOf_0(['MOV 55 RIGHT\nADD 42\nADD 100\nADD 100', 'NOP\nNOP\nMOV LEFT ACC']), executionTests$lambda_5);
    var data = listOf_0(['MOV 1 ACC\nMOV ACC ANY\nADD ANY\nADD ANY\nNOP', 'MOV 2 ACC\nADD ANY\nMOV ACC ANY\nMOV ACC ANY\nNOP', 'MOV 4 ACC\nMOV ACC ANY\nADD ANY\nMOV ACC ANY\nNOP', 'MOV 8 ACC\nADD ANY\nMOV ACC ANY\nADD ANY\nNOP', 'MOV 16 ACC\nADD ANY\nMOV ACC ANY\nMOV ACC ANY\nNOP', 'MOV 32 ACC\nMOV ACC ANY\nADD ANY\nADD ANY\nNOP', 'MOV 64 ACC\nADD ANY\nMOV ACC ANY\nADD ANY\nNOP', 'MOV 128 ACC\nMOV ACC ANY\nADD ANY\nMOV ACC ANY\nNOP', 'MOV 64 ACC\nADD ANY\nMOV ACC ANY\nADD ANY\nNOP', 'MOV -8 ACC\nMOV ACC ANY\nADD ANY\nMOV ACC ANY\nNOP', 'MOV 2 ACC\nADD ANY\nMOV ACC ANY\nMOV ACC ANY\nNOP', 'MOV 1 ACC\nMOV ACC ANY\nADD ANY\nADD ANY\nNOP']);
    testCores(8, data, executionTests$lambda_6);
  }
  function testSingleCore$lambda(closure$check) {
    return function (it) {
      closure$check(single(it));
      return Unit;
    };
  }
  function testSingleCore(steps, text, check) {
    testCores(steps, listOf(text), testSingleCore$lambda(check));
  }
  function testCores$lambda$lambda(it) {
    return it.first;
  }
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function testCores$lambda(closure$check) {
    return function (it) {
      var tmp$ = closure$check;
      var $receiver = sortedWith(toList(it.cores), new Comparator$ObjectLiteral(compareBy$lambda(testCores$lambda$lambda)));
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(item.second);
      }
      var destination_0 = ArrayList_init();
      var tmp$_1;
      tmp$_1 = destination.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (Kotlin.isType(element, Core$T21Basic))
          destination_0.add_11rb$(element);
      }
      tmp$(destination_0);
      return Unit;
    };
  }
  function testCores(steps, coreTexts, check) {
    testRun(steps, coreTexts, testCores$lambda(check));
  }
  function testRun(steps, coreTexts, check) {
    var destination = ArrayList_init(collectionSizeOrDefault(coreTexts, 10));
    var tmp$;
    tmp$ = coreTexts.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver = new Core$T21Basic();
      $receiver.text = item;
      tmp$_0.call(destination, $receiver);
    }
    var cores = destination;
    var $receiver_0 = new IntRange(0, cores.size - 1 | 0);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_0.add_11rb$(new CorePosition(item_0, 0));
    }
    var corePositions = destination_0;
    var r = new RuntimeState(toMap(zip(corePositions, cores)));
    r.step();
    var tmp$_2;
    tmp$_2 = steps - 1 | 0;
    for (var index = 0; index <= tmp$_2; index++) {
      r.step();
    }
    check(r);
  }
  function parsingTests() {
    var tmp$;
    var data = mapOf([to('', 'Success(item=)'), to(',', 'Success(item=)'), to(',,', 'Success(item=)'), to(',,,', 'Success(item=)'), to(':', 'Failure(error=[INVALID LABEL])'), to('::', 'Failure(error=[INVALID LABEL])'), to(':,', 'Failure(error=[INVALID LABEL])'), to(',:', 'Success(item=)'), to(',::', 'Failure(error=[INVALID OPCODE ":"])'), to('!,!,:', 'Success(item=)'), to('!:', 'Failure(error=[INVALID LABEL ":"])'), to('!!:', 'Success(item=)'), to('!!!:', 'Success(item=)'), to('!,!,!,:', 'Success(item=)'), to(',!,!,!,:', 'Failure(error=[INVALID OPCODE "!"])'), to(',,!,,!:', 'Success(item=)'), to('!NOP!', 'Failure(error=[INVALID OPCODE "NOP!"])'), to('!NOP !', 'Failure(error=[TOO MANY OPERANDS])'), to(',: JMP ,', 'Failure(error=[MISSING OPERAND])'), to('!!: JMP !,', 'Success(item=)'), to('!!: JMP !!,', 'Failure(error=[UNDEFINED LABEL])'), to(',!!: JMP !', 'Failure(error=[INVALID OPCODE "!!:"])'), to('m:', 'Success(item=)'), to(':t', 'Failure(error=[INVALID OPCODE "T"])'), to('f', 'Failure(error=[INVALID OPCODE "F"])'), to('d#', 'Failure(error=[INVALID OPCODE "D"])'), to('+:', 'Success(item=)'), to('nop', 'Success(item=NOP)'), to('ADD 4', 'Success(item=ADD(source=4))'), to('MOV', 'Failure(error=[MISSING OPERAND])'), to('MOV ACC', 'Failure(error=[MISSING OPERAND])'), to('MOV ACC,ROBRANCHE', 'Failure(error=[INVALID REGISTER "ROBRANCHE"])'), to('MOV BAR ACC', 'Failure(error=[INVALID EXPRESSION "BAR"])'), to('MOV UP UP DOWN', 'Failure(error=[TOO MANY OPERANDS])'), to('MOV DOWN LEFT RIGHT LEFT RIGHT', 'Failure(error=[TOO MANY OPERANDS])'), to('MOV B A', 'Failure(error=[INVALID EXPRESSION "B"])'), to('ILIEK2:MOV IT MOV IT', 'Failure(error=[TOO MANY OPERANDS])'), to('MOV UP ACC', 'Success(item=MOV(source=UP, destination=ACC))'), to('MOV UP  ACC', 'Success(item=MOV(source=UP, destination=ACC))'), to('MOV  UP ACC', 'Success(item=MOV(source=UP, destination=ACC))'), to('MOV  UP  ACC', 'Success(item=MOV(source=UP, destination=ACC))'), to(' MOV UP ACC', 'Success(item=MOV(source=UP, destination=ACC))'), to('MOV UP ACC ', 'Success(item=MOV(source=UP, destination=ACC))'), to('MOV LAST ANY', 'Success(item=MOV(source=LAST, destination=ANY))')]);
    tmp$ = data.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var input = tmp$_0.key;
      var expected = tmp$_0.value;
      var result = Parser_getInstance().parse_61zpoe$(input);
      var actual = result.toString();
      assertEq(expected, actual, "input: '" + input + "'");
    }
  }
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$;
  function UI(dom) {
    this.dom = dom;
    this.cores = this.dom.coreGrid.cores;
    var $receiver = this.cores.keys;
    var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      destination.put_xwzc9p$(element, Kotlin.isType(tmp$_0 = new Core$T21Basic(), Core) ? tmp$_0 : throwCCE());
    }
    this.runtimeState = new RuntimeState(destination);
    var tmp$_1;
    tmp$_1 = this.cores.entries.iterator();
    while (tmp$_1.hasNext()) {
      var tmp$_2 = tmp$_1.next();
      var position = tmp$_2.key;
      var core = tmp$_2.value;
      this.addEventHandler_0(core.codeTextArea, DOMConstants$Companion_getInstance().Event_KeyUp, UI_init$lambda(position, core, this));
    }
    this.addEventHandler_0(this.dom.stopButton, DOMConstants$Companion_getInstance().Event_OnClick, UI_init$lambda_0(this));
    this.addEventHandler_0(this.dom.stepButton, DOMConstants$Companion_getInstance().Event_OnClick, UI_init$lambda_1(this));
    this.addEventHandler_0(this.dom.playButton, DOMConstants$Companion_getInstance().Event_OnClick, UI_init$lambda_2(this));
    this.addEventHandler_0(this.dom.fastButton, DOMConstants$Companion_getInstance().Event_OnClick, UI_init$lambda_3(this));
    this.addEventHandler_0(this.dom.veryFastButton, DOMConstants$Companion_getInstance().Event_OnClick, UI_init$lambda_4(this));
    this.refreshModelFromUI_0();
    this.refreshUIFromModel_0();
    this.intervalId_0 = null;
  }
  UI.prototype.topLevelCatchAll_0 = function (errorContext, f) {
    try {
      f();
    }
     catch (ex) {
      if (Kotlin.isType(ex, Throwable)) {
        var message = 'In ' + errorContext + ': ' + ex;
        console.error(message);
        Logger$Companion_getInstance().log_61zpoe$(message);
      }
       else
        throw ex;
    }
  };
  function UI$addEventHandler$lambda(closure$type, closure$elementDesc, closure$handler, this$UI) {
    return function (event) {
      var errorContext = "'" + closure$type + "' handler for element " + closure$elementDesc;
      try {
        closure$handler(event);
      }
       catch (ex) {
        if (Kotlin.isType(ex, Throwable)) {
          var message = 'In ' + errorContext + ': ' + ex;
          console.error(message);
          Logger$Companion_getInstance().log_61zpoe$(message);
        }
         else
          throw ex;
      }
      return Unit;
    };
  }
  UI.prototype.addEventHandler_0 = function (target, type, handler) {
    var elementDesc = 'id=' + target.id + ' class=' + target.className;
    target.addEventListener(type, UI$addEventHandler$lambda(type, elementDesc, handler, this));
  };
  UI.prototype.keyboardInput_0 = function (e, position, core) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    if (e.ctrlKey) {
      tmp$ = e.keyCode;
      if (tmp$ === DOMConstants$Companion_getInstance().KeyCode_Up)
        (tmp$_1 = (tmp$_0 = this.cores.get_11rb$(position.up())) != null ? tmp$_0.codeTextArea : null) != null ? (tmp$_1.focus(), Unit) : null;
      else if (tmp$ === DOMConstants$Companion_getInstance().KeyCode_Down)
        (tmp$_3 = (tmp$_2 = this.cores.get_11rb$(position.down())) != null ? tmp$_2.codeTextArea : null) != null ? (tmp$_3.focus(), Unit) : null;
      else if (tmp$ === DOMConstants$Companion_getInstance().KeyCode_Left)
        (tmp$_5 = (tmp$_4 = this.cores.get_11rb$(position.left())) != null ? tmp$_4.codeTextArea : null) != null ? (tmp$_5.focus(), Unit) : null;
      else if (tmp$ === DOMConstants$Companion_getInstance().KeyCode_Right)
        (tmp$_7 = (tmp$_6 = this.cores.get_11rb$(position.right())) != null ? tmp$_6.codeTextArea : null) != null ? (tmp$_7.focus(), Unit) : null;
      else
        Logger$Companion_getInstance().log_61zpoe$(e.keyCode.toString());
    }
    this.compile_0(core);
    this.updateInstructionCounts_0();
  };
  UI.prototype.compile_0 = function (core) {
    var tmp$;
    var sourceCode = core.codeTextArea.value;
    var result = Parser_getInstance().parse_61zpoe$(sourceCode);
    Logger$Companion_getInstance().log_61zpoe$('---');
    Logger$Companion_getInstance().log_61zpoe$(sourceCode);
    if (Kotlin.isType(result, Result$Success)) {
      Logger$Companion_getInstance().log_61zpoe$('ok:');
      Logger$Companion_getInstance().log_61zpoe$(result.item.toString());
    }
     else if (Kotlin.isType(result, Result$Failure)) {
      Logger$Companion_getInstance().log_61zpoe$('error:');
      tmp$ = result.error.iterator();
      while (tmp$.hasNext()) {
        var error = tmp$.next();
        Logger$Companion_getInstance().log_61zpoe$(error.toString());
      }
    }
  };
  UI.prototype.updateInstructionCounts_0 = function () {
    var $receiver = this.cores.values;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var transform$result;
      var result = Parser_getInstance().parse_61zpoe$(item.sourceCode);
      if (Kotlin.isType(result, Result$Success)) {
        transform$result = result.item.instructions.size;
      }
       else {
        transform$result = lines(item.sourceCode).size;
      }
      tmp$_0.call(destination, transform$result);
    }
    var instructionCounts = destination;
    this.dom.instructionCountDiv.textContent = joinToString(instructionCounts, ' + ') + ' = ' + sum(instructionCounts) + ' instructions';
  };
  UI.prototype.reset_0 = function () {
    this.stopAutorun_0();
    this.runtimeState.stop();
    this.refreshUIFromModel_0();
  };
  UI.prototype.step_0 = function () {
    this.stopAutorun_0();
    this.runSteps_0(1);
  };
  UI.prototype.play_0 = function () {
    this.startAutorun_0(1, 40);
  };
  UI.prototype.fast_0 = function () {
    this.startAutorun_0(100, 16);
  };
  UI.prototype.veryFast_0 = function () {
    this.startAutorun_0(1000, 0);
  };
  function UI$startAutorun$lambda(closure$stepCount, this$UI) {
    return function () {
      this$UI.runSteps_0(closure$stepCount);
      return Unit;
    };
  }
  UI.prototype.startAutorun_0 = function (stepCount, millisecondDelay) {
    this.stopAutorun_0();
    this.intervalId_0 = window.setInterval(UI$startAutorun$lambda(stepCount, this), millisecondDelay);
  };
  UI.prototype.stopAutorun_0 = function () {
    var tmp$;
    if ((tmp$ = this.intervalId_0) != null) {
      window.clearInterval(tmp$);
    }
  };
  UI.prototype.runSteps_0 = function (stepCount) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.refreshModelFromUI_0();
    tmp$ = new IntRange(1, stepCount);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var i = tmp$_0; i <= tmp$_1; i += tmp$_2) {
      this.runtimeState.step();
      if (this.runtimeState.isOnBreakpoint()) {
        this.stopAutorun_0();
        Logger$Companion_getInstance().log_61zpoe$('breakpoint reached!');
        break;
      }
    }
    this.refreshUIFromModel_0();
  };
  UI.prototype.refreshModelFromUI_0 = function () {
    var tmp$;
    tmp$ = this.cores.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var corePosition = tmp$_0.key;
      var uiCore = tmp$_0.value;
      var runtimeCore = ensureNotNull(this.runtimeState.cores.get_11rb$(corePosition));
      if (Kotlin.isType(runtimeCore, Core$T21Basic)) {
        runtimeCore.text = uiCore.sourceCode;
      }
    }
  };
  function UI$refreshUIFromModel$updatePipe(this$UI) {
    return function (corePosition, direction) {
      var num = this$UI.runtimeState.pipes.get_11rb$(PipeKey$Companion_getInstance().writingTo_rdx6u$(corePosition, direction));
      var arrowVisible = this$UI.runtimeState.isArrowVisible_rdx6u$(corePosition, direction);
      this$UI.dom.coreGrid.setPipeStatus_ucvirg$(corePosition, direction, arrowVisible, num);
    };
  }
  UI.prototype.refreshUIFromModel_0 = function () {
    var tmp$, tmp$_0;
    tmp$ = this.cores.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var corePosition = tmp$_1.key;
      var uiCore = tmp$_1.value;
      var runtimeCore = ensureNotNull(this.runtimeState.cores.get_11rb$(corePosition));
      if (Kotlin.isType(runtimeCore, Core$T21Basic)) {
        uiCore.dataBind_6x5hck$(runtimeCore);
      }
      var updatePipe = UI$refreshUIFromModel$updatePipe(this);
      tmp$_0 = Direction$Companion_getInstance().all.iterator();
      while (tmp$_0.hasNext()) {
        var direction = tmp$_0.next();
        updatePipe(corePosition, direction);
        updatePipe(corePosition.neighbor_dbt1po$(direction), direction.opposite());
      }
    }
    var currentCycle = this.runtimeState.currentCycle;
    this.dom.currentCycleDiv.textContent = currentCycle == null ? '' : 'CYCLE: ' + toString(currentCycle);
  };
  function UI_init$lambda(closure$position, closure$core, this$UI) {
    return function (it) {
      var tmp$, tmp$_0;
      tmp$_0 = Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : throwCCE();
      this$UI.keyboardInput_0(tmp$_0, closure$position, closure$core);
      return Unit;
    };
  }
  function UI_init$lambda_0(this$UI) {
    return function (it) {
      Logger$Companion_getInstance().log_61zpoe$('reset');
      this$UI.reset_0();
      return Unit;
    };
  }
  function UI_init$lambda_1(this$UI) {
    return function (it) {
      Logger$Companion_getInstance().log_61zpoe$('step');
      this$UI.step_0();
      return Unit;
    };
  }
  function UI_init$lambda_2(this$UI) {
    return function (it) {
      Logger$Companion_getInstance().log_61zpoe$('play');
      this$UI.play_0();
      return Unit;
    };
  }
  function UI_init$lambda_3(this$UI) {
    return function (it) {
      Logger$Companion_getInstance().log_61zpoe$('fast');
      this$UI.fast_0();
      return Unit;
    };
  }
  function UI_init$lambda_4(this$UI) {
    return function (it) {
      Logger$Companion_getInstance().log_61zpoe$('very fast');
      this$UI.veryFast_0();
      return Unit;
    };
  }
  UI.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UI',
    interfaces: []
  };
  function Widget(dom, identifier) {
    this.dom_sdw63c$_0 = dom;
    this.identifier_gzrjgf$_0 = identifier;
  }
  Object.defineProperty(Widget.prototype, 'dom', {
    get: function () {
      return this.dom_sdw63c$_0;
    }
  });
  Object.defineProperty(Widget.prototype, 'identifier', {
    get: function () {
      return this.identifier_gzrjgf$_0;
    }
  });
  Widget.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Widget',
    interfaces: []
  };
  function CoreGrid(dom, identifier, rowCount, colCount) {
    Widget.call(this, dom, identifier);
    this.dom_j8b3eh$_0 = dom;
    this.identifier_t4t3we$_0 = identifier;
    this.rowCount = rowCount;
    this.colCount = colCount;
    this.table = null;
    this.cores = null;
    this.pipeWidgets = null;
    var pipes = LinkedHashMap_init();
    var mutableCoreMap = LinkedHashMap_init();
    var $receiver = until(0, (this.rowCount * 2 | 0) + 1 | 0);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = until(0, (this.colCount * 2 | 0) + 1 | 0);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        var tmp$_2 = destination_0.add_11rb$;
        var transform$result;
        var tmp$_3;
        tmp$_3 = new Pair(item_0 % 2, item % 2);
        if (equals(tmp$_3, new Pair(0, 0))) {
          transform$result = this.dom.div();
        }
         else if (equals(tmp$_3, new Pair(1, 0))) {
          var w = new VertiPipe(this.dom, 'vertiPipe_' + item_0 + '_' + item);
          var cUp = new CorePosition((item_0 - 1 | 0) / 2 | 0, (item - 2 | 0) / 2 | 0);
          var cDown = new CorePosition((item_0 - 1 | 0) / 2 | 0, item / 2 | 0);
          pipes.put_xwzc9p$(PipeKey$Companion_getInstance().fromTo_pijq1c$(cUp, cDown), w);
          pipes.put_xwzc9p$(PipeKey$Companion_getInstance().fromTo_pijq1c$(cDown, cUp), w);
          transform$result = w.rootHtmlElement;
        }
         else if (equals(tmp$_3, new Pair(0, 1))) {
          var w_0 = new HorizPipe(this.dom, 'horizPipe_' + item_0 + '_' + item);
          var cLeft = new CorePosition((item_0 - 2 | 0) / 2 | 0, (item - 1 | 0) / 2 | 0);
          var cRight = new CorePosition(item_0 / 2 | 0, (item - 1 | 0) / 2 | 0);
          pipes.put_xwzc9p$(PipeKey$Companion_getInstance().fromTo_pijq1c$(cLeft, cRight), w_0);
          pipes.put_xwzc9p$(PipeKey$Companion_getInstance().fromTo_pijq1c$(cRight, cLeft), w_0);
          transform$result = w_0.rootHtmlElement;
        }
         else if (equals(tmp$_3, new Pair(1, 1))) {
          var pos = new CorePosition((item_0 - 1 | 0) / 2 | 0, (item - 1 | 0) / 2 | 0);
          var core = new Core_0(this.dom, 'core_' + pos.x + '_' + pos.y);
          mutableCoreMap.put_xwzc9p$(pos, core);
          transform$result = core.rootHtmlElement;
        }
         else
          throw new NoWhenBranchMatchedException();
        tmp$_2.call(destination_0, transform$result);
      }
      tmp$_0.call(destination, destination_0);
    }
    var coreRows = destination;
    this.cores = toMap_0(mutableCoreMap);
    this.pipeWidgets = toMap_0(pipes);
    this.table = this.dom.newTable_a7f01y$('testTable', coreRows, CoreGrid_init$lambda);
  }
  Object.defineProperty(CoreGrid.prototype, 'dom', {
    get: function () {
      return this.dom_j8b3eh$_0;
    }
  });
  Object.defineProperty(CoreGrid.prototype, 'identifier', {
    get: function () {
      return this.identifier_t4t3we$_0;
    }
  });
  Object.defineProperty(CoreGrid.prototype, 'rootHtmlElement', {
    get: function () {
      return this.table;
    }
  });
  CoreGrid.prototype.setPipeStatus_ucvirg$ = function (corePosition, direction, arrowVisible, num) {
    var pipeKey = PipeKey$Companion_getInstance().writingTo_rdx6u$(corePosition, direction);
    var pipeWidget = this.pipeWidgets.get_11rb$(pipeKey);
    if (Kotlin.isType(pipeWidget, VertiPipe) && equals(direction, Direction$UP_getInstance())) {
      pipeWidget.downToUp = num;
      pipeWidget.upArrow.visible = arrowVisible;
    }
     else if (Kotlin.isType(pipeWidget, VertiPipe) && equals(direction, Direction$DOWN_getInstance())) {
      pipeWidget.upToDown = num;
      pipeWidget.downArrow.visible = arrowVisible;
    }
     else if (Kotlin.isType(pipeWidget, HorizPipe) && equals(direction, Direction$RIGHT_getInstance())) {
      pipeWidget.leftToRight = num;
      pipeWidget.rightArrow.visible = arrowVisible;
    }
     else if (Kotlin.isType(pipeWidget, HorizPipe) && equals(direction, Direction$LEFT_getInstance())) {
      pipeWidget.rightToLeft = num;
      pipeWidget.leftArrow.visible = arrowVisible;
    }
     else
      Logger$Companion_getInstance().log_61zpoe$('setPipeStatus failed: ' + corePosition + ' ' + direction + ' ' + arrowVisible + ' ' + toString(num));
  };
  function CoreGrid_init$lambda(td, htmlElement, f) {
    td.appendChild(htmlElement);
    return Unit;
  }
  CoreGrid.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CoreGrid',
    interfaces: [Widget]
  };
  function FancyUnicode() {
    FancyUnicode$Companion_getInstance();
  }
  function FancyUnicode$Companion() {
    FancyUnicode$Companion_instance = this;
    this.upArrowFull = '\u2191';
    this.downArrowFull = '\u2193';
    this.leftArrowFull = '\u2190';
    this.rightArrowFull = '\u2192';
    this.upArrowEmpty = '\u21D1';
    this.downArrowEmpty = '\u21D3';
    this.leftArrowEmpty = '\u21D0';
    this.rightArrowEmpty = '\u21D2';
    this.upArrow = this.upArrowEmpty;
    this.downArrow = this.downArrowEmpty;
    this.leftArrow = this.leftArrowEmpty;
    this.rightArrow = this.rightArrowEmpty;
  }
  FancyUnicode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var FancyUnicode$Companion_instance = null;
  function FancyUnicode$Companion_getInstance() {
    if (FancyUnicode$Companion_instance === null) {
      new FancyUnicode$Companion();
    }
    return FancyUnicode$Companion_instance;
  }
  FancyUnicode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FancyUnicode',
    interfaces: []
  };
  function DOM$newElement$lambda_0(closure$text, closure$identifier, closure$classes) {
    return function ($receiver) {
      if (closure$text != null) {
        $receiver.appendChild(document.createTextNode(closure$text));
      }
      if (closure$identifier != null)
        $receiver.id = closure$identifier;
      var idAndClasses = plus(listOfNotNull(closure$identifier), closure$classes);
      if (!idAndClasses.isEmpty()) {
        $receiver.className = joinToString(idAndClasses, ' ');
      }
      return Unit;
    };
  }
  function HorizPipe(dom, identifier) {
    Widget.call(this, dom, identifier);
    this.dom_ays3iu$_0 = dom;
    this.identifier_qa1l5f$_0 = identifier;
    var identifier_0 = this.identifier + '_div';
    var classes = listOf('pipeDiv');
    var tmp$;
    this.div = Kotlin.isType(tmp$ = createElement(document, 'div', DOM$newElement$lambda_0(null, identifier_0, classes)), HTMLDivElement) ? tmp$ : throwCCE();
    var identifier_1 = this.identifier + '_ltr_div';
    var classes_0 = listOf('pipeValue');
    var tmp$_0;
    this.leftToRightDiv = Kotlin.isType(tmp$_0 = createElement(document, 'div', DOM$newElement$lambda_0(null, identifier_1, classes_0)), HTMLDivElement) ? tmp$_0 : throwCCE();
    var identifier_2 = this.identifier + '_rtl_div';
    var classes_1 = listOf('pipeValue');
    var tmp$_1;
    this.rightToLeftDiv = Kotlin.isType(tmp$_1 = createElement(document, 'div', DOM$newElement$lambda_0(null, identifier_2, classes_1)), HTMLDivElement) ? tmp$_1 : throwCCE();
    this.rightArrow = new ArrowSpanOrDiv(this.dom, this.identifier + '_right_arrow_div', FancyUnicode$Companion_getInstance().rightArrow, false, listOf_0(['pipeArrow', 'pipeArrowHoriz']));
    this.leftArrow = new ArrowSpanOrDiv(this.dom, this.identifier + '_left_arrow_div', FancyUnicode$Companion_getInstance().leftArrow, false, listOf_0(['pipeArrow', 'pipeArrowHoriz']));
    this.leftToRight_lwqcea$_0 = new Num(0);
    this.rightToLeft_ejcxqe$_0 = new Num(0);
    var tmp$_2;
    tmp$_2 = listOf_0([this.leftToRightDiv, this.rightArrow.rootHtmlElement, this.leftArrow.rootHtmlElement, this.rightToLeftDiv]).iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      this.div.appendChild(element);
    }
  }
  Object.defineProperty(HorizPipe.prototype, 'dom', {
    get: function () {
      return this.dom_ays3iu$_0;
    }
  });
  Object.defineProperty(HorizPipe.prototype, 'identifier', {
    get: function () {
      return this.identifier_qa1l5f$_0;
    }
  });
  Object.defineProperty(HorizPipe.prototype, 'rootHtmlElement', {
    get: function () {
      return this.div;
    }
  });
  Object.defineProperty(HorizPipe.prototype, 'leftToRight', {
    get: function () {
      return this.leftToRight_lwqcea$_0;
    },
    set: function (value) {
      var tmp$;
      this.leftToRightDiv.textContent = (tmp$ = value != null ? value.toString() : null) != null ? tmp$ : '';
    }
  });
  Object.defineProperty(HorizPipe.prototype, 'rightToLeft', {
    get: function () {
      return this.rightToLeft_ejcxqe$_0;
    },
    set: function (value) {
      var tmp$;
      this.rightToLeftDiv.textContent = (tmp$ = value != null ? value.toString() : null) != null ? tmp$ : '';
    }
  });
  HorizPipe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HorizPipe',
    interfaces: [Widget]
  };
  function VertiPipe(dom, identifier) {
    Widget.call(this, dom, identifier);
    this.dom_pxs1iy$_0 = dom;
    this.identifier_754vlb$_0 = identifier;
    var identifier_0 = this.identifier + '_div';
    var classes = listOf('pipeDiv');
    var tmp$;
    this.div = Kotlin.isType(tmp$ = createElement(document, 'div', DOM$newElement$lambda_0(null, identifier_0, classes)), HTMLDivElement) ? tmp$ : throwCCE();
    var identifier_1 = this.identifier + '_ltr_div';
    var classes_0 = listOf('pipeValue');
    var tmp$_0;
    this.downToUpSpan = Kotlin.isType(tmp$_0 = createElement(document, 'span', DOM$newElement$lambda_0(null, identifier_1, classes_0)), HTMLSpanElement) ? tmp$_0 : throwCCE();
    var identifier_2 = this.identifier + '_rtl_div';
    var classes_1 = listOf('pipeValue');
    var tmp$_1;
    this.upToDownSpan = Kotlin.isType(tmp$_1 = createElement(document, 'span', DOM$newElement$lambda_0(null, identifier_2, classes_1)), HTMLSpanElement) ? tmp$_1 : throwCCE();
    this.upArrow = new ArrowSpanOrDiv(this.dom, this.identifier + '_up_arrow_div', FancyUnicode$Companion_getInstance().upArrow, true, listOf_0(['pipeArrow', 'pipeArrowVerti']));
    this.downArrow = new ArrowSpanOrDiv(this.dom, this.identifier + '_down_arrow_div', FancyUnicode$Companion_getInstance().downArrow, true, listOf_0(['pipeArrow', 'pipeArrowVerti']));
    this.downToUp_rb3gow$_0 = new Num(0);
    this.upToDown_ppex4w$_0 = new Num(0);
    var tmp$_2;
    tmp$_2 = listOf_0([this.downToUpSpan, this.upArrow.rootHtmlElement, this.downArrow.rootHtmlElement, this.upToDownSpan]).iterator();
    while (tmp$_2.hasNext()) {
      var element = tmp$_2.next();
      this.div.appendChild(element);
    }
  }
  Object.defineProperty(VertiPipe.prototype, 'dom', {
    get: function () {
      return this.dom_pxs1iy$_0;
    }
  });
  Object.defineProperty(VertiPipe.prototype, 'identifier', {
    get: function () {
      return this.identifier_754vlb$_0;
    }
  });
  Object.defineProperty(VertiPipe.prototype, 'rootHtmlElement', {
    get: function () {
      return this.div;
    }
  });
  Object.defineProperty(VertiPipe.prototype, 'downToUp', {
    get: function () {
      return this.downToUp_rb3gow$_0;
    },
    set: function (value) {
      var tmp$;
      this.downToUpSpan.textContent = (tmp$ = value != null ? value.toString() : null) != null ? tmp$ : '';
    }
  });
  Object.defineProperty(VertiPipe.prototype, 'upToDown', {
    get: function () {
      return this.upToDown_ppex4w$_0;
    },
    set: function (value) {
      var tmp$;
      this.upToDownSpan.textContent = (tmp$ = value != null ? value.toString() : null) != null ? tmp$ : '';
    }
  });
  VertiPipe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VertiPipe',
    interfaces: [Widget]
  };
  function ArrowSpanOrDiv(dom, identifier, text, isSpan, classes) {
    Widget.call(this, dom, identifier);
    this.dom_yrpis1$_0 = dom;
    this.identifier_yemvt4$_0 = identifier;
    this.text = text;
    this.isSpan = isSpan;
    this.classes = classes;
    var tmp$;
    if (this.isSpan) {
      var identifier_0 = this.identifier;
      var text_0 = this.text;
      var classes_0 = this.classes;
      var tmp$_0;
      tmp$ = Kotlin.isType(tmp$_0 = createElement(document, 'span', DOM$newElement$lambda_0(text_0, identifier_0, classes_0)), HTMLSpanElement) ? tmp$_0 : throwCCE();
    }
     else {
      var identifier_1 = this.identifier;
      var text_1 = this.text;
      var classes_1 = this.classes;
      var tmp$_1;
      tmp$ = Kotlin.isType(tmp$_1 = createElement(document, 'div', DOM$newElement$lambda_0(text_1, identifier_1, classes_1)), HTMLDivElement) ? tmp$_1 : throwCCE();
    }
    this.rootHtmlElement_qyxwws$_0 = tmp$;
    this.visible_xq8q75$_0 = true;
  }
  Object.defineProperty(ArrowSpanOrDiv.prototype, 'dom', {
    get: function () {
      return this.dom_yrpis1$_0;
    }
  });
  Object.defineProperty(ArrowSpanOrDiv.prototype, 'identifier', {
    get: function () {
      return this.identifier_yemvt4$_0;
    }
  });
  Object.defineProperty(ArrowSpanOrDiv.prototype, 'rootHtmlElement', {
    get: function () {
      return this.rootHtmlElement_qyxwws$_0;
    }
  });
  Object.defineProperty(ArrowSpanOrDiv.prototype, 'visible', {
    get: function () {
      return this.visible_xq8q75$_0;
    },
    set: function (value) {
      this.rootHtmlElement.style.visibility = value ? 'visible' : 'hidden';
    }
  });
  ArrowSpanOrDiv.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArrowSpanOrDiv',
    interfaces: [Widget]
  };
  function Core_0(dom, identifier) {
    Widget.call(this, dom, identifier);
    this.dom_upif9v$_0 = dom;
    this.identifier_z39zx8$_0 = identifier;
    this.table = null;
    this.codeTextArea = null;
    this.accDiv = null;
    this.bakDiv = null;
    this.lastDiv = null;
    this.modeDiv = null;
    this.idleDiv = null;
    var identifier_0 = this.identifier + '_table';
    var classes = listOf('coreTable');
    var tmp$;
    this.table = Kotlin.isType(tmp$ = createElement(document, 'table', DOM$newElement$lambda_0(null, identifier_0, classes)), HTMLTableElement) ? tmp$ : throwCCE();
    var makeTr = Core_init$makeTr(this);
    var trAcc = makeTr('acc');
    var trBak = makeTr('bak');
    var trLast = makeTr('last');
    var trMode = makeTr('mode');
    var trIdle = makeTr('idle');
    var trList = listOf_0([trAcc, trBak, trLast, trMode, trIdle]);
    var identifier_1 = this.identifier + '__tr__tdSourceCode';
    var classes_0;
    classes_0 = listOfNotNull(identifier_1);
    var tmp$_0;
    var tdSourceCode = Kotlin.isType(tmp$_0 = createElement(document, 'td', DOM$newElement$lambda_0(null, identifier_1, classes_0)), HTMLTableCellElement) ? tmp$_0 : throwCCE();
    tdSourceCode.rowSpan = trList.size;
    first(trList).appendChild(tdSourceCode);
    var addTdAndGetValueDiv = Core_init$addTdAndGetValueDiv(trList, this);
    this.accDiv = addTdAndGetValueDiv(trAcc, 'ACC', '0');
    this.bakDiv = addTdAndGetValueDiv(trBak, 'BAK', '(0)');
    this.lastDiv = addTdAndGetValueDiv(trLast, 'LAST', 'N/A');
    this.modeDiv = addTdAndGetValueDiv(trMode, 'MODE', 'IDLE');
    this.idleDiv = addTdAndGetValueDiv(trIdle, 'IDLE', '0%');
    var tagName = DOMConstants$Companion_getInstance().Tag_TextArea;
    var identifier_2 = this.identifier + '_codeTextArea';
    var classes_1 = listOf('codeTextArea');
    var tmp$_1;
    this.codeTextArea = Kotlin.isType(tmp$_1 = createElement(document, tagName, DOM$newElement$lambda_0(null, identifier_2, classes_1)), HTMLTextAreaElement) ? tmp$_1 : throwCCE();
    tdSourceCode.appendChild(this.codeTextArea);
    this.acc_upklde$_0 = new Num(0);
    this.bak_upjzod$_0 = new Num(0);
    this.last_sg8v01$_0 = Direction$DOWN_getInstance();
    this.mode_sfgg2m$_0 = Mode$Idle_getInstance();
    this.idle_shuhdb$_0 = 0;
  }
  Object.defineProperty(Core_0.prototype, 'dom', {
    get: function () {
      return this.dom_upif9v$_0;
    }
  });
  Object.defineProperty(Core_0.prototype, 'identifier', {
    get: function () {
      return this.identifier_z39zx8$_0;
    }
  });
  Object.defineProperty(Core_0.prototype, 'rootHtmlElement', {
    get: function () {
      return this.table;
    }
  });
  Object.defineProperty(Core_0.prototype, 'sourceCode', {
    get: function () {
      return this.codeTextArea.value;
    },
    set: function (value) {
      this.codeTextArea.value = value;
    }
  });
  Object.defineProperty(Core_0.prototype, 'acc', {
    get: function () {
      return this.acc_upklde$_0;
    },
    set: function (value) {
      this.accDiv.textContent = value.toString();
    }
  });
  Object.defineProperty(Core_0.prototype, 'bak', {
    get: function () {
      return this.bak_upjzod$_0;
    },
    set: function (value) {
      this.bakDiv.textContent = '(' + value + ')';
    }
  });
  Object.defineProperty(Core_0.prototype, 'last', {
    get: function () {
      return this.last_sg8v01$_0;
    },
    set: function (value) {
      var tmp$;
      this.lastDiv.textContent = (tmp$ = value != null ? value.toString() : null) != null ? tmp$ : 'N/A';
    }
  });
  Object.defineProperty(Core_0.prototype, 'mode', {
    get: function () {
      return this.mode_sfgg2m$_0;
    },
    set: function (value) {
      this.modeDiv.textContent = value.toString();
    }
  });
  Object.defineProperty(Core_0.prototype, 'idle', {
    get: function () {
      return this.idle_shuhdb$_0;
    },
    set: function (value) {
      this.idleDiv.textContent = value.toString();
    }
  });
  Core_0.prototype.dataBind_6x5hck$ = function (core) {
    this.acc = core.acc;
    this.bak = core.bak;
    this.last = core.last;
    this.mode = core.mode;
    this.idle = core.idlePercent;
  };
  function Core_init$makeTr(this$Core) {
    return function (trId) {
      var identifier = this$Core.identifier + '__tr__' + trId;
      var classes = listOf('tr' + trId);
      var tmp$;
      return Kotlin.isType(tmp$ = createElement(document, 'tr', DOM$newElement$lambda_0(null, identifier, classes)), HTMLTableRowElement) ? tmp$ : throwCCE();
    };
  }
  function Core_init$addTdAndGetValueDiv$makeTd(this$Core, closure$tr, closure$classes) {
    return function (tdId) {
      var identifier = closure$tr.id + '__td__' + tdId;
      var classes = closure$classes;
      var tmp$;
      return Kotlin.isType(tmp$ = createElement(document, 'td', DOM$newElement$lambda_0(null, identifier, classes)), HTMLTableCellElement) ? tmp$ : throwCCE();
    };
  }
  function Core_init$addTdAndGetValueDiv(closure$trList, this$Core) {
    return function (tr, descText, valueText) {
      var classes = !equals(tr, last(closure$trList)) ? listOf_0(['coreRightTd', 'coreRightTdExceptTheBottomOne']) : listOf('coreRightTd');
      var makeTd = Core_init$addTdAndGetValueDiv$makeTd(this$Core, tr, classes);
      var td = makeTd('td');
      var classes_0 = listOf('descRightCoreTd');
      var tmp$;
      td.appendChild(Kotlin.isType(tmp$ = createElement(document, 'div', DOM$newElement$lambda_0(descText, '_', classes_0)), Element) ? tmp$ : throwCCE());
      var classes_1 = listOf('valueRightCoreTd');
      var tmp$_0;
      var valueDiv = Kotlin.isType(tmp$_0 = createElement(document, 'div', DOM$newElement$lambda_0(valueText, '_', classes_1)), HTMLDivElement) ? tmp$_0 : throwCCE();
      td.appendChild(valueDiv);
      tr.appendChild(td);
      this$Core.table.appendChild(tr);
      return valueDiv;
    };
  }
  Core_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Core',
    interfaces: [Widget]
  };
  function Logger(dom, identifier) {
    Widget.call(this, dom, identifier);
    this.dom_op7hyc$_0 = dom;
    this.identifier_12fcvn$_0 = identifier;
    var identifier_0 = this.identifier + '_logDiv';
    var classes;
    classes = listOfNotNull(identifier_0);
    var tmp$;
    this.logDiv = Kotlin.isType(tmp$ = createElement(document, 'div', DOM$newElement$lambda_0(null, identifier_0, classes)), HTMLDivElement) ? tmp$ : throwCCE();
    this.logDiv.style.whiteSpace = 'pre-line';
    this.logDiv.style.overflowY = 'scroll';
    this.logDiv.style.height = '300px';
    this.logDiv.style.maxHeight = '300px';
  }
  Object.defineProperty(Logger.prototype, 'dom', {
    get: function () {
      return this.dom_op7hyc$_0;
    }
  });
  Object.defineProperty(Logger.prototype, 'identifier', {
    get: function () {
      return this.identifier_12fcvn$_0;
    }
  });
  Object.defineProperty(Logger.prototype, 'rootHtmlElement', {
    get: function () {
      return this.logDiv;
    }
  });
  Logger.prototype.log_61zpoe$ = function (s) {
    var identifier = 'logTextDiv';
    var classes;
    classes = listOfNotNull(identifier);
    var tmp$;
    var logTextDiv = Kotlin.isType(tmp$ = createElement(document, 'div', DOM$newElement$lambda_0(s, identifier, classes)), HTMLDivElement) ? tmp$ : throwCCE();
    this.logDiv.appendChild(logTextDiv);
    this.logDiv.scrollTop = this.logDiv.scrollHeight;
  };
  Logger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Logger',
    interfaces: [Widget]
  };
  function Logger_0(prefix) {
    Logger$Companion_getInstance();
    this.prefix = prefix;
  }
  function Logger$Companion() {
    Logger$Companion_instance = this;
    this.logFunction_0 = getCallableRef('println', function (message) {
      return println(message), Unit;
    });
  }
  Logger$Companion.prototype.initDOMLog_ep0k5p$ = function (logFunction) {
    this.logFunction_0 = logFunction;
  };
  Logger$Companion.prototype.log_61zpoe$ = function (string) {
    this.logFunction_0(string);
  };
  Logger$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Logger$Companion_instance = null;
  function Logger$Companion_getInstance() {
    if (Logger$Companion_instance === null) {
      new Logger$Companion();
    }
    return Logger$Companion_instance;
  }
  Logger_0.prototype.log_61zpoe$ = function (string) {
    Logger$Companion_getInstance().logFunction_0(this.prefix + ': ' + string);
  };
  Logger_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Logger',
    interfaces: []
  };
  function Result() {
  }
  function Result$Success(item) {
    Result.call(this);
    this.item = item;
  }
  Result$Success.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Success',
    interfaces: [Result]
  };
  Result$Success.prototype.component1 = function () {
    return this.item;
  };
  Result$Success.prototype.copy_11rb$ = function (item) {
    return new Result$Success(item === void 0 ? this.item : item);
  };
  Result$Success.prototype.toString = function () {
    return 'Success(item=' + Kotlin.toString(this.item) + ')';
  };
  Result$Success.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.item) | 0;
    return result;
  };
  Result$Success.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.item, other.item))));
  };
  function Result$Failure(error) {
    Result.call(this);
    this.error = error;
  }
  Result$Failure.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Failure',
    interfaces: [Result]
  };
  Result$Failure.prototype.component1 = function () {
    return this.error;
  };
  Result$Failure.prototype.copy_11rc$ = function (error) {
    return new Result$Failure(error === void 0 ? this.error : error);
  };
  Result$Failure.prototype.toString = function () {
    return 'Failure(error=' + Kotlin.toString(this.error) + ')';
  };
  Result$Failure.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.error) | 0;
    return result;
  };
  Result$Failure.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.error, other.error))));
  };
  Result.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Result',
    interfaces: []
  };
  function assertEq(expected, actual, message) {
    if (message === void 0)
      message = null;
    if (!equals(actual, expected)) {
      Logger$Companion_getInstance().log_61zpoe$('Assertion failed: ' + (message != null ? message : '') + '\t' + 'expected ' + expected + ', actual: ' + actual);
    }
  }
  Core$T21Basic$Jump.ToOffset = Core$T21Basic$Jump$ToOffset;
  Core$T21Basic$Jump.ToLabel = Core$T21Basic$Jump$ToLabel;
  Core$T21Basic.Jump = Core$T21Basic$Jump;
  Object.defineProperty(Core$T21Basic$InstructionResult, 'Companion', {
    get: Core$T21Basic$InstructionResult$Companion_getInstance
  });
  Core$T21Basic.InstructionResult = Core$T21Basic$InstructionResult;
  Core.T21Basic = Core$T21Basic;
  Object.defineProperty(Core, 'Damaged', {
    get: Core$Damaged_getInstance
  });
  Core.T30Stack = Core$T30Stack;
  Core.T20 = Core$T20;
  Core.T31 = Core$T31;
  Core.Input = Core$Input;
  Core.Output = Core$Output;
  Core.PuzzleImage = Core$PuzzleImage;
  Core.SandboxImage = Core$SandboxImage;
  Core.ImageOutput = Core$ImageOutput;
  var package$lang = _.lang || (_.lang = {});
  var package$runtime = package$lang.runtime || (package$lang.runtime = {});
  package$runtime.Core = Core;
  Object.defineProperty(CoreType, 'T21Basic', {
    get: CoreType$T21Basic_getInstance
  });
  Object.defineProperty(CoreType, 'T30Stack', {
    get: CoreType$T30Stack_getInstance
  });
  Object.defineProperty(CoreType, 'T20', {
    get: CoreType$T20_getInstance
  });
  Object.defineProperty(CoreType, 'T31', {
    get: CoreType$T31_getInstance
  });
  Object.defineProperty(CoreType, 'Input', {
    get: CoreType$Input_getInstance
  });
  Object.defineProperty(CoreType, 'Output', {
    get: CoreType$Output_getInstance
  });
  Object.defineProperty(CoreType, 'PuzzleImage', {
    get: CoreType$PuzzleImage_getInstance
  });
  Object.defineProperty(CoreType, 'SandboxImage', {
    get: CoreType$SandboxImage_getInstance
  });
  package$runtime.CoreType = CoreType;
  Object.defineProperty(Mode, 'Idle', {
    get: Mode$Idle_getInstance
  });
  Object.defineProperty(Mode, 'Run', {
    get: Mode$Run_getInstance
  });
  Object.defineProperty(Mode, 'Read', {
    get: Mode$Read_getInstance
  });
  Object.defineProperty(Mode, 'Write', {
    get: Mode$Write_getInstance
  });
  Object.defineProperty(Mode, 'ImplementationError', {
    get: Mode$ImplementationError_getInstance
  });
  package$runtime.Mode = Mode;
  package$runtime.Num = Num;
  package$runtime.CorePosition = CorePosition;
  Object.defineProperty(PipeKey, 'Companion', {
    get: PipeKey$Companion_getInstance
  });
  package$runtime.PipeKey = PipeKey;
  package$runtime.RuntimeState = RuntimeState;
  package$runtime.StepExecution = StepExecution;
  Object.defineProperty(Instruction, 'NOP', {
    get: Instruction$NOP_getInstance
  });
  Object.defineProperty(Instruction, 'SWP', {
    get: Instruction$SWP_getInstance
  });
  Object.defineProperty(Instruction, 'SAV', {
    get: Instruction$SAV_getInstance
  });
  Object.defineProperty(Instruction, 'NEG', {
    get: Instruction$NEG_getInstance
  });
  Instruction.ADD = Instruction$ADD;
  Instruction.SUB = Instruction$SUB;
  Instruction.MOV = Instruction$MOV;
  Instruction.JMP = Instruction$JMP;
  Instruction.JEZ = Instruction$JEZ;
  Instruction.JNZ = Instruction$JNZ;
  Instruction.JGZ = Instruction$JGZ;
  Instruction.JLZ = Instruction$JLZ;
  Instruction.JRO = Instruction$JRO;
  Object.defineProperty(Instruction, 'Companion', {
    get: Instruction$Companion_getInstance
  });
  var package$syntax = package$lang.syntax || (package$lang.syntax = {});
  package$syntax.Instruction = Instruction;
  Object.defineProperty(Opcode, 'NOP', {
    get: Opcode$NOP_getInstance
  });
  Object.defineProperty(Opcode, 'SWP', {
    get: Opcode$SWP_getInstance
  });
  Object.defineProperty(Opcode, 'SAV', {
    get: Opcode$SAV_getInstance
  });
  Object.defineProperty(Opcode, 'NEG', {
    get: Opcode$NEG_getInstance
  });
  Object.defineProperty(Opcode, 'ADD', {
    get: Opcode$ADD_getInstance
  });
  Object.defineProperty(Opcode, 'SUB', {
    get: Opcode$SUB_getInstance
  });
  Object.defineProperty(Opcode, 'MOV', {
    get: Opcode$MOV_getInstance
  });
  Object.defineProperty(Opcode, 'JMP', {
    get: Opcode$JMP_getInstance
  });
  Object.defineProperty(Opcode, 'JEZ', {
    get: Opcode$JEZ_getInstance
  });
  Object.defineProperty(Opcode, 'JNZ', {
    get: Opcode$JNZ_getInstance
  });
  Object.defineProperty(Opcode, 'JGZ', {
    get: Opcode$JGZ_getInstance
  });
  Object.defineProperty(Opcode, 'JLZ', {
    get: Opcode$JLZ_getInstance
  });
  Object.defineProperty(Opcode, 'JRO', {
    get: Opcode$JRO_getInstance
  });
  Object.defineProperty(Opcode, 'Companion', {
    get: Opcode$Companion_getInstance
  });
  package$syntax.Opcode = Opcode;
  package$syntax.Source = Source;
  package$syntax.Destination = Destination;
  Object.defineProperty(package$syntax, 'ACC', {
    get: ACC_getInstance
  });
  package$syntax.Label = Label;
  package$syntax.Constant = Constant;
  Object.defineProperty(package$syntax, 'NIL', {
    get: NIL_getInstance
  });
  Object.defineProperty(Port, 'ANY', {
    get: Port$ANY_getInstance
  });
  Object.defineProperty(Port, 'LAST', {
    get: Port$LAST_getInstance
  });
  package$syntax.Port = Port;
  Object.defineProperty(Direction, 'UP', {
    get: Direction$UP_getInstance
  });
  Object.defineProperty(Direction, 'LEFT', {
    get: Direction$LEFT_getInstance
  });
  Object.defineProperty(Direction, 'DOWN', {
    get: Direction$DOWN_getInstance
  });
  Object.defineProperty(Direction, 'RIGHT', {
    get: Direction$RIGHT_getInstance
  });
  Object.defineProperty(Direction, 'Companion', {
    get: Direction$Companion_getInstance
  });
  package$syntax.Direction = Direction;
  package$syntax.Line = Line;
  package$syntax.SyntaxList = SyntaxList;
  Parser.prototype.Location = Parser$Location;
  Parser$Error.InvalidLabel = Parser$Error$InvalidLabel;
  Parser$Error.LabelIsAlreadyDefined = Parser$Error$LabelIsAlreadyDefined;
  Parser$Error.InvalidOpcode = Parser$Error$InvalidOpcode;
  Parser$Error.MissingOperand = Parser$Error$MissingOperand;
  Parser$Error.TooManyOperands = Parser$Error$TooManyOperands;
  Parser$Error.InvalidExpression = Parser$Error$InvalidExpression;
  Parser$Error.InvalidRegister = Parser$Error$InvalidRegister;
  Parser$Error.UndefinedLabel = Parser$Error$UndefinedLabel;
  Parser.prototype.Error = Parser$Error;
  Object.defineProperty(package$syntax, 'Parser', {
    get: Parser_getInstance
  });
  $$importsForInline$$['BIX-100'] = _;
  var package$ui = _.ui || (_.ui = {});
  package$ui.DOM = DOM;
  Object.defineProperty(DOMConstants, 'Companion', {
    get: DOMConstants$Companion_getInstance
  });
  package$ui.DOMConstants = DOMConstants;
  Object.defineProperty(package$ui, 'global', {
    get: function () {
      return global;
    },
    set: function (value) {
      global = value;
    }
  });
  package$ui.C = C;
  package$ui.main_kand9s$ = main;
  package$ui.tests = tests;
  package$ui.executionTests = executionTests;
  package$ui.testSingleCore_hoyxxn$ = testSingleCore;
  package$ui.testCores_vf4dul$ = testCores;
  package$ui.testRun_56hrtn$ = testRun;
  package$ui.parsingTests = parsingTests;
  package$ui.UI = UI;
  package$ui.Widget = Widget;
  package$ui.CoreGrid = CoreGrid;
  Object.defineProperty(FancyUnicode, 'Companion', {
    get: FancyUnicode$Companion_getInstance
  });
  package$ui.FancyUnicode = FancyUnicode;
  package$ui.HorizPipe = HorizPipe;
  package$ui.VertiPipe = VertiPipe;
  package$ui.ArrowSpanOrDiv = ArrowSpanOrDiv;
  package$ui.Core = Core_0;
  package$ui.Logger = Logger;
  Object.defineProperty(Logger_0, 'Companion', {
    get: Logger$Companion_getInstance
  });
  var package$utils = _.utils || (_.utils = {});
  package$utils.Logger = Logger_0;
  Result.Success = Result$Success;
  Result.Failure = Result$Failure;
  package$utils.Result = Result;
  package$utils.assertEq_t2v8x8$ = assertEq;
  global = null;
  main([]);
  Kotlin.defineModule('BIX-100', _);
  return _;
}(typeof this['BIX-100'] === 'undefined' ? {} : this['BIX-100'], kotlin);

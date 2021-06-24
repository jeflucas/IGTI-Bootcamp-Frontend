<template>
    <form class="add-form">
        <div class="form-control">
            <label>Task</label>
            <input type="text" name="text" placeholder="Add Task" />
        </div>
        <div class="form-control">
            <label>Day and Time</label>
            <input type="text" name="day" placeholder="Add Day and Time" />
        </div>
        <div class="form-control">
            <label>Set Reminder</label>
            <input type="checkbox" name="reminder" />
        </div>

        <input type="submit" value="Save Task" class="btn btn-block" />
    </form>
</template>
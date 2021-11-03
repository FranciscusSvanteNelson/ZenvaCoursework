using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using TMPro;

public class ClickManager : MonoBehaviour
{
    public List<float> autoClickersLastTime = new List<float>();
    public int autoClickerPrice;
    public TextMeshProUGUI quantityText;

    void Update ()
    {
        // loop through each auto clicker
        for(int i = 0; i < autoClickersLastTime.Count; i++)
        {
            // is it time to click?
            if(Time.time - autoClickersLastTime[i] >= 1.0f)
            {
                autoClickersLastTime[i] = Time.time;
                EnemyManager.instance.curEnemy.Damage();
            }
        }
    }

    // called when the buy auto clicker button is pressed
    public void OnBuyAutoClicker ()
    {
        // do we have enough gold?
        if(GameManager.instance.gold >= autoClickerPrice)
        {
            // take away the gold and add an auto clicker
            GameManager.instance.TakeGold(autoClickerPrice);
            autoClickersLastTime.Add(Time.time);

            // update the quantity text
            quantityText.text = "x " + autoClickersLastTime.Count.ToString();
        }
    }
}